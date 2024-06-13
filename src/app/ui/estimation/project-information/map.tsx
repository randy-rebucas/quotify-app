import { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from '@react-google-maps/api';
import { Libraries } from '@googlemaps/js-api-loader';
import { useProjectInformationStore } from "@/app/lib/projectInformationStore";
import { LatLong } from "./steps/address";

const libraries = ["core", "maps", "places", "marker", 'geometry'];

export default function CustomMap() {

    const projectInformation = useProjectInformationStore(state => state.projectInformation);
    const location = projectInformation.address.location;

    const [coords, setCoords] = useState<number[]>([14.599512, 120.984222]);

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: libraries as Libraries,
    })
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let latlong: LatLong = { coordinates: coords };

        if (scriptLoaded) {
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
        }
    }, [coords, scriptLoaded])

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

        if (location) {
            setMarker(location, 'Marker');
        }

    }, [location, map])

    return (
        <div className="relative w-full h-[37.037vh] mt-[4.63vh]">
            {scriptLoaded ? <div style={{
                height: 300
            }} ref={mapRef}></div> : <p>Loading map...</p>}
        </div>
    )
}