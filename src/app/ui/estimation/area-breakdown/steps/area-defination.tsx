import Tooltip from "@/app/ui/tooltip";
import { ChangeEvent, useState } from "react";
import { IAmenity } from "@/app/models/Amenity";
import { ICustomSpace } from "@/app/models/CustomSpace";
import { v4 as uuid } from 'uuid'

type AreaData = {
    selectedAmenityIds: any[]
    selectedCustomSpaces: ProjectCustomSpaceData[]
}

type AreaFormProps = AreaData & {
    amenities: any[];
    custom_spaces: any[];
    updateFields: (fields: Partial<AreaData>) => void
}

export type ProjectCustomSpaceData = {
    _id: string;
    space: string;
    quantity: number;
};

const INITIAL_PROJECT_CUSTOM_SPACE_DATA: ProjectCustomSpaceData = {
    _id: uuid(),
    space: '',
    quantity: 0
};

export default function AreaDefination({
    selectedAmenityIds,
    selectedCustomSpaces,
    amenities,
    custom_spaces,
    updateFields
}: AreaFormProps) {

    const [quantity, setQuantity] = useState<number>(0);
    const [customSpace, setCustomSpace] = useState<string>('');
    const MAX_QUANTITY = 10;

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedId = event.target.value;
        if (event.target.checked) {
            updateFields({ selectedAmenityIds: [...selectedAmenityIds, checkedId] });
        } else {
            updateFields({ selectedAmenityIds: selectedAmenityIds.filter((_id: string) => _id !== checkedId) });
        }
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCustomSpace(event.target.value);
    }

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(+event.target.value);
    }

    const increment = () => {
        setQuantity(prev => (prev == MAX_QUANTITY) ? prev : prev + 1);
    }

    const decrement = () => {
        setQuantity(prev => (prev == 0) ? 0 : prev - 1);
    }

    const addFields = () => {
        updateFields({ selectedCustomSpaces: [...selectedCustomSpaces, { _id: uuid(), space: customSpace, quantity: quantity }] });
    }

    const removeFields = (_id: string) => {
        updateFields({ selectedCustomSpaces: selectedCustomSpaces.filter((customSpace: ProjectCustomSpaceData) => customSpace._id !== _id) });
    }

    console.log(custom_spaces);
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
                                                value={`${amenity._id}`} checked={selectedAmenityIds.includes(amenity._id)} onChange={e => handleCheckboxChange(e)}
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

                    <div className="pt-[29.63vh] px-30 w-full">
                        <p className="text-[#005A92]">add your custom spaces here</p>
                        {selectedCustomSpaces.map((selectedCustomSpace: ProjectCustomSpaceData, index: any) => (
                            <>
                                <div className="flex gap-5 items-center js-more-space justify-start mt-[3.704vh]" key={selectedCustomSpace._id}>
                                    <div className="js-more-space__block flex items-center justify-start gap-5">
                                        <select name="space" id={`spaceSelect`}
                                            defaultValue={selectedCustomSpace.space}
                                            className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left">
                                            {custom_spaces.map((custom_space: ICustomSpace) => (
                                                <>
                                                    {custom_space._id &&
                                                        <optgroup key={custom_space._id} className="py-3 text-gray-700 dark:text-gray-200" label={custom_space._id}>
                                                            {custom_space.spaces.map((space: { id: string; space_name: string; capacity?: string }, index: number) => (
                                                                <option key={index} value={space.id} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{space.space_name} {space.capacity && <>(capacity: {space.capacity})</>}</option>
                                                            ))}
                                                        </optgroup>}
                                                </>
                                            ))}
                                        </select>
                                        <div className="flex items-center justify-start">
                                            <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
                                            <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                                                <input
                                                    type="number"
                                                    name='quantity'
                                                    id="counter-input"
                                                    defaultValue={selectedCustomSpace.quantity}
                                                    className="flex-shrink-0 text-gray-900 dark:text-white bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60"
                                                    required
                                                    readOnly />
                                                <div className="flex flex-col">
                                                    <button
                                                        type="button"
                                                        id="increment-button"
                                                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                            <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        id="decrement-button"
                                                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                            <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="bg-red/40 px-3 py-3 shadow text-white" onClick={() => removeFields(selectedCustomSpace._id)}>
                                        Remove
                                    </button>
                                </div>
                            </>
                        ))}
                        <div className="flex gap-5 items-center js-more-space justify-start mt-[3.704vh]">
                            <div className="js-more-space__block flex items-center justify-start gap-5">
                                <select name="space" id={`spaceSelect`}
                                    onChange={(e) => handleSelectChange(e)}
                                    className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left">
                                    {custom_spaces.map((custom_space: ICustomSpace) => (
                                        <>
                                            {custom_space._id &&
                                                <optgroup key={custom_space._id} className="py-3 text-gray-700 dark:text-gray-200" label={custom_space._id}>
                                                    {custom_space.spaces.map((space: any, index: number) => (
                                                        <option key={index} value={space.id} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{space.space_name} {space.capacity && <>(capacity: {space.capacity})</>}</option>
                                                    ))}
                                                </optgroup>}
                                        </>
                                    ))}
                                </select>
                                <div className="flex items-center justify-start">
                                    <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
                                    <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                                        <input
                                            type="number"
                                            name='quantity'
                                            id="counter-input"
                                            value={quantity}
                                            onChange={(e) => handleQuantityChange(e)}
                                            className="flex-shrink-0 text-gray-900 dark:text-white bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60"
                                            required />
                                        <div className="flex flex-col">
                                            <button
                                                type="button"
                                                id="increment-button"
                                                onClick={() => increment()}
                                                className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                    <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                id="decrement-button"
                                                onClick={() => decrement()}
                                                className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                    <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-10">
                            <button type="button" className="js-add-space bg-transparent flex" onClick={addFields}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.5" d="M20.0026 10.9974L11.0003 10.9932L11.0045 19.9955L8.99615 19.9961L9.00611 10.9939L0.0038564 11.0039L0.00450159 8.9955L9.00675 8.99967L9.00964 0.00449407L11.0039 0.00385265L11.001 8.99903L19.9961 8.99614L20.0026 10.9974Z" fill="#005A92"></path>
                                </svg> <span className="pl-[10px] text-[#13669A] font-latobold text-opacity-50 text-[24px]">add another space</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}