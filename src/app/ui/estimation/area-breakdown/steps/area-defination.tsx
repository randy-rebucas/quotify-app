import Tooltip from "@/app/ui/tooltip";
import { ChangeEvent } from "react";
import { IAmenity } from "@/app/models/Amenity";
import DynamicInput from "../dynamic-input";

type AreaData = {
    selectedIds: any[]
}

type AreaFormProps = AreaData & {
    amenities: any[];
    custom_spaces: any[];
    updateFields: (fields: Partial<AreaData>) => void
}

export default function AreaDefination({
    selectedIds,
    amenities,
    custom_spaces,
    updateFields
}: AreaFormProps) {

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedId = event.target.value;
        if (event.target.checked) {
            updateFields({ selectedIds: [...selectedIds, checkedId] });
        } else {
            updateFields({ selectedIds: selectedIds.filter((_id: string) => _id !== checkedId) });
        }
    }
    
    return (
        <>
            <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30 pt-[6.852vh]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="h-1 w-20 bg-black"></div>
                                <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                    area definition
                                </h5>
                                <div className="w-full">
                                    <p className="mt-[11.111vh] mb-[1.852vh]">select your amenity spaces</p>

                                    {amenities.map((amenity: IAmenity, index: any) => (
                                        <div className="custom-checkbox mb-4" key={index}>
                                            <input id={`tmp-${amenity._id}`} type="checkbox" className="promoted-input-checkbox"
                                                value={`${amenity._id}`} checked={selectedIds.includes(amenity._id)} onChange={e => handleCheckboxChange(e)}
                                            />
                                            <svg>
                                                <use xlinkHref={`#checkmark-${index}`}></use>
                                            </svg>
                                            <label htmlFor={`tmp-${amenity._id}`}>{amenity.amenityName}</label>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} >
                                                <symbol id={`checkmark-${index}`} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeMiterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                    </path>
                                                </symbol>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-start-3 lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full">

                <Tooltip />

                <div className="flex flex-col justify-start items-end w-full h-full">
                    <DynamicInput custom_spaces={custom_spaces}/>
                </div>
            </div>

        </>
    );
}
