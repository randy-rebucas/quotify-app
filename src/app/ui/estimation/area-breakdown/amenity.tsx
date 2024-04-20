'use client'

import { IAmenity } from "@/app/models/Amenity";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function Amenity({ selectedIds, onChange }: { selectedIds: any[], onChange: ChangeEventHandler<HTMLInputElement> }) {
    const [amenities, setAmenities] = useState<IAmenity[]>([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            fetch('/api/amenities')
                .then((res) => res.json())
                .then((data) => {
                    setAmenities(data.amenities)
                })
        }
        fetchData();
    }, []);

    if (!amenities.length) return <p>No Amenity data.</p>

    return (
        <>
            {amenities.map((amenity: IAmenity, index: any) => (
                <div className="custom-checkbox mb-4" key={amenity.amenityName}>
                    <input id={`tmp-${index}`} type="checkbox" className="promoted-input-checkbox"
                        value={amenity.amenityName} checked={selectedIds.includes(amenity.amenityName)} onChange={onChange}
                    />
                    <svg>
                        <use xlinkHref={`#checkmark-${amenity.amenityName}`}></use>
                    </svg>
                    <label htmlFor={`tmp-${index}`}>{amenity.amenityName}</label>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} >
                        <symbol id={`checkmark-${index}`} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeMiterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                            </path>
                        </symbol>
                    </svg>
                </div>

            ))}
        </>
    );
}
