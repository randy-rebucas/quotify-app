import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { LatLong } from "./entities";
import { useJsApiLoader } from '@react-google-maps/api';
import { Library } from '@googlemaps/js-api-loader';


export default function CustomMap({ latlong, onChange }: {
    latlong: LatLong,
    onChange: ChangeEventHandler<HTMLInputElement>
}) {
    const libs: Library[] = ["core", "maps", "places", "marker"]


    const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: libs
    })

    const mapRef = useRef<HTMLDivElement>(null);
    const placeAutoCompleteRef = useRef<HTMLInputElement>(null);
    const event = new Event("change");
    useEffect(() => {
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
    }, [isLoaded, latlong])

    useEffect(() => {
        const setMarker = (location: google.maps.LatLng, name: string) => {
            if (!map) return

            map.setCenter(location);
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: location,
                title: name
            });
        }

        if (autoComplete) {
            autoComplete.addListener('place_changed', () => {
                const place = autoComplete.getPlace();
                setSelectedPlace(place.formatted_address as string);
                // onChange(place.formatted_address)
                const position = place.geometry?.location;

                if (position) {
                    setMarker(position, place.name!)
                }
            });

            placeAutoCompleteRef.current?.addEventListener('change', (e: Event) => {
                console.log(e.target?.dispatchEvent);
            })

            placeAutoCompleteRef.current?.dispatchEvent(event);
        }
    }, [autoComplete])


    return (
        <>
            <input id="map-search" ref={placeAutoCompleteRef}
                className="block border-b border-0 bg-transparent py-1 text-darkblue border-darkblue w-full outline-none "
                placeholder="enter building address here" type="text" onChange={onChange}/>
            {/* value={address} onChange={e => updateFields({ address: e.target.value })} */}
            <p>{selectedPlace}</p>
            <div className="relative w-full h-[37.037vh] mt-[4.63vh]">
                {isLoaded ? <div style={{
                    height: 300
                }} ref={mapRef}></div> : <p>Loading map...</p>}
            </div>
        </>
    )
}