import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { LatLong } from "../entities";
import { useJsApiLoader } from '@react-google-maps/api';
import { Library, Libraries } from '@googlemaps/js-api-loader';
type Address = {
    formated_address: string
    location: any
}

type AddressData = {
    address: string
    hasAddress: boolean
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

const libs: Library[] = ["core", "maps", "places", "marker"]

export default function Address({
    address,
    hasAddress,
    updateFields,
}: AddressFormProps) {
    const [coords, setCoords] = useState<number[]>([14.599512, 120.984222]);

    const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<google.maps.LatLng | undefined>();

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: libs,
    })

    const mapRef = useRef<HTMLDivElement>(null);
    const placeAutoCompleteRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        let latlong: LatLong = { coordinates: coords };

        if (isLoaded) {
            const options = {
                center: {
                    lat: latlong.coordinates[0],
                    lng: latlong.coordinates[1]
                },
                zoom: 17,
                mapId: "My-Map"
            }

            const gMap = new google.maps.Map(mapRef.current as HTMLDivElement, options);
            setMap(gMap);

            const gAutoComplete = new google.maps.places.Autocomplete(placeAutoCompleteRef.current as HTMLInputElement, {
                fields: ['formatted_address', 'geometry'],
                componentRestrictions: {
                    country: ['ca']
                }
            });
            setAutoComplete(gAutoComplete);
        }
    }, [coords, isLoaded])

    useEffect(() => {
        const setMarker = (location: google.maps.LatLng, name: string) => {
            if (!map) return

            map.setCenter(location);
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: location,
                title: name
            });

            console.log(marker);
            // if (marker) {
            //     updateFields({
            //         address:  selectedPlace!
            //     });
            // }
        }

        if (autoComplete) {
            autoComplete.addListener('place_changed', () => {
                const { formatted_address, geometry, name } = autoComplete.getPlace();
                const position = geometry?.location;
                setSelectedPlace(formatted_address as string);
                setSelectedLocation(position);
                if (position) {
                    setMarker(position, name!);
                }
            });
        }
    }, [autoComplete, map, selectedPlace, updateFields])

    // if (selectedLocation) {
    //     updateFields({
    //         address:  selectedPlace!
    //     });
    // }
    console.log(address);
    console.log(coords)
    return (

        <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
            <div className="h-full w-full">
                <div className="p-30 pt-[6.852vh]">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="h-1 w-20 bg-black"></div>
                            <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                where is the space located?
                            </h5>

                            <div className="mt-[15px] w-full">

                                <input id="map-search" ref={placeAutoCompleteRef}
                                    className="block border-b border-0 bg-transparent py-1 text-darkblue border-darkblue w-full outline-none "
                                    placeholder="enter building address here" type="text" />

                                {address && <p>Address: {address}</p>}
                                <div className="relative w-full h-[37.037vh] mt-[4.63vh]">
                                    {isLoaded ? <div style={{
                                        height: 300
                                    }} ref={mapRef}></div> : <p>Loading map...</p>}
                                </div>

                                <div className="custom-checkbox mb-4 mt-10">
                                    <input id="tmp-4" type="checkbox" className="promoted-input-checkbox" value={1} checked={hasAddress} onChange={e => updateFields({ hasAddress: e.target.checked })} />
                                    <svg>
                                        <use href="#checkmark-4" xlinkHref="#checkmark-4" />
                                    </svg>
                                    <label htmlFor="tmp-4">I don’t have an adress for my project</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{
                                        display: 'none'
                                    }}>
                                        <symbol id="checkmark-4" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeMiterlimit="10" fill="none"
                                                d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                            </path>
                                        </symbol>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}