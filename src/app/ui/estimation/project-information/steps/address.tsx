import { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from '@react-google-maps/api';
import { Libraries } from '@googlemaps/js-api-loader';
import CustomMap from "../map";
import { useProjectInformationStore } from "@/app/lib/projectInformationStore";

const libraries = ["core", "maps", "places", "marker", 'geometry'];

export type LatLong = {
    coordinates: number[]
}

export default function Address() {
    const project = useProjectInformationStore(state => state.projectInformation);
    const updateFields = useProjectInformationStore(state => state.updateFields)

    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null);
    const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: libraries as Libraries,
    })

    const placeAutoCompleteRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (scriptLoaded) {
            const gAutoComplete = new google.maps.places.Autocomplete(placeAutoCompleteRef.current as HTMLInputElement, {
                fields: ['formatted_address', 'geometry'],
                componentRestrictions: {
                    country: ['ca']
                }
            });
            setAutoComplete(gAutoComplete);
        }
    }, [scriptLoaded])


    if (autoComplete) {
        autoComplete.addListener('place_changed', () => {
            const { formatted_address, geometry, name } = autoComplete.getPlace();
            const position = geometry?.location;
            updateFields({
                address: {
                    place: formatted_address as string,
                    location: position
                }
            });
        });
    }

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
                                    placeholder="enter building address here" type="text"/>

                                <CustomMap />

                                <div className="custom-checkbox mb-4 mt-10">
                                    <input id="tmp-4" type="checkbox" className="promoted-input-checkbox" value={1} checked={project.hasAddress} onChange={e => updateFields({ hasAddress: e.target.checked })} />
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