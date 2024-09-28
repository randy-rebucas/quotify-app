import Tooltip from "@/components/tooltip";
import { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";
import { PartialData, ProjectCustomSpaceData, useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";
import { useAppStore } from "@/lib/store/appStore";
import Link from "next/link";
// 

type Props = {
    amenities: any;
    customSpaces: any;
}

export default function AreaDefination({
    amenities,
    customSpaces
}: Props) {

    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    useEffect(() => {
        const initialCustomSpace = [
            { id: 0, space: '', quantity: 0 }
        ];

        if (areaBreakdown.selectedCustomSpaces.length === 0) {
            updateFields({ selectedCustomSpaces: initialCustomSpace });
        }
    }, [areaBreakdown, updateFields])

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

                                <AmenitySelections amenities={amenities} />

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

                        <DynamicFieldsCustomSpaceOptions areaBreakdown={areaBreakdown} customSpaces={customSpaces} />

                        <NewFields />
                    </div>
                </div>
            </div>

        </>
    );
}

export function AmenitySelections({ amenities }: { amenities: any }) {

    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)


    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedId = event.target.value;
        if (event.target.checked) {
            updateFields({ selectedAmenityIds: [...areaBreakdown.selectedAmenityIds, checkedId] });
        } else {
            updateFields({ selectedAmenityIds: areaBreakdown.selectedAmenityIds.filter((_id: string) => _id !== checkedId) });
        }
    }

    return (
        <div className="w-full">
            <p className="mt-[11.111vh] mb-[1.852vh]">select your amenity spaces</p>
            {amenities.map((amenity: any, index: any) => (
                <div className="custom-checkbox mb-4" key={amenity.amenityName}>
                    <input id={`tmp-${amenity._id}`} type="checkbox" className="promoted-input-checkbox"
                        value={`${amenity._id}`} checked={areaBreakdown.selectedAmenityIds.includes(amenity._id)} onChange={e => handleCheckboxChange(e)}
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
    )
}

export function DynamicFieldsCustomSpaceOptions({ areaBreakdown, customSpaces }: { areaBreakdown: PartialData, customSpaces: any }) {
    return (
        <>
            {areaBreakdown.selectedCustomSpaces.map((input: { id: number, space: string, quantity: number }, index: number) => (
                <div className="flex gap-5 items-center js-more-space justify-start mt-[3.704vh]" id={`group-${input.id}`} key={`group-${input.id}`}>
                    <div className="js-more-space__block flex items-center justify-start gap-5">
                        <SelectOptions index={index} space={input.space} customSpaces={customSpaces} />
                        <Quantity index={index} quantity={input.quantity} />
                    </div>
                    <RemoveField index={index} />
                </div>
            ))}
        </>
    )
}

export function RemoveField({ index }: { index: number }) {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    const removeFields = (id: number) => {
        updateFields({ selectedCustomSpaces: areaBreakdown.selectedCustomSpaces.filter((customSpace: ProjectCustomSpaceData) => customSpace.id !== id) });
    }

    return (
        <>
            {areaBreakdown.selectedCustomSpaces.length > 1 && <button type="button" className="bg-red/90 px-3 py-3 shadow text-white" onClick={() => removeFields(index)}>
                Remove
            </button>}
        </>
    )
}

export function NewFields() {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    const addFields = () => {
        updateFields({ selectedCustomSpaces: [...areaBreakdown.selectedCustomSpaces, { id: areaBreakdown.selectedCustomSpaces.length, space: '', quantity: 0 }] });
    }

    return (
        <div className="flex items-center mt-10">
            <button type="button" className="js-add-space bg-transparent flex" onClick={addFields}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path opacity="0.5" d="M20.0026 10.9974L11.0003 10.9932L11.0045 19.9955L8.99615 19.9961L9.00611 10.9939L0.0038564 11.0039L0.00450159 8.9955L9.00675 8.99967L9.00964 0.00449407L11.0039 0.00385265L11.001 8.99903L19.9961 8.99614L20.0026 10.9974Z" fill="#005A92"></path>
                </svg> <span className="pl-[10px] text-[#13669A] font-latobold text-opacity-50 text-[24px]">add another space</span>
            </button>
        </div>
    )
}

export function SelectOptions({ index, space, customSpaces }: { index: number, space: string, customSpaces: any[] }) {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    const handleSelectChange = (index: number, event: ChangeEvent<HTMLSelectElement>) => {
        let data = [...areaBreakdown.selectedCustomSpaces];
        data[index].space = event.target.value;
        updateFields({ selectedCustomSpaces: data });
    }

    return (
        <select name="space" id={`space-${index}`}
            defaultValue={space}
            onChange={(event) => handleSelectChange(index, event)}
            className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left">
            <option key={`option-group-X`}>Select</option>
            {customSpaces.map((customSpace: any, index: number) => (
                <optgroup key={`option-group-${index}`} className="py-3 text-gray-700 dark:text-gray-700" label={customSpace._id}>
                    {customSpace.spaces.map((space: { id: string; space_name: string; capacity?: string }, index: number) => (
                        <option key={`option-${index}`} value={space.id} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{space.space_name} {space.capacity && <>(capacity: {space.capacity})</>}</option>
                    ))}
                </optgroup>
            ))}
        </select>
    )
}

export function Quantity({ index, quantity }: { index: number, quantity: number }) {
    const MAX_QUANTITY = 10;
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    const handleQuantityChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...areaBreakdown.selectedCustomSpaces];
        data[index].quantity = +event.target.value;
        updateFields({ selectedCustomSpaces: data });
    }

    const updateQuantity = (index: number, position: string) => {
        let data = [...areaBreakdown.selectedCustomSpaces];
        let newQuantity = position === 'increment' ?
            (data[index].quantity == MAX_QUANTITY) ? data[index].quantity : data[index].quantity + 1 :
            (data[index].quantity == 0) ? 0 : data[index].quantity - 1;
        data[index].quantity = newQuantity;
        updateFields({ selectedCustomSpaces: data });
    }

    return (
        <div className="flex items-center justify-start">
            <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
            <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                <input
                    type="number"
                    name='quantity'
                    id={`quantity-${index}`}
                    value={quantity}
                    onChange={(event) => handleQuantityChange(index, event)}
                    className="flex-shrink-0 text-gray-900 bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60"

                />
                <div className="flex flex-col">
                    <button
                        type="button"
                        id="increment-button"
                        onClick={() => updateQuantity(index, 'increment')}
                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                            <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        id="decrement-button"
                        onClick={() => updateQuantity(index, 'decrement')}
                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                            <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export function Dropdown({ customSpaces }: { customSpaces: any[] }) {

    const toggleCustonSpaceOption = useAppStore(state => state.toggleCustonSpaceOption)

    return (
        <div id="dropdownDivider"
            className={clsx(
                'z-10 bg-[#f2f7fa] rounded-0 divide-y divide-gray-100 shadow w-60 absolute left-0 top-[52px] m-0',
                {
                    'block': toggleCustonSpaceOption,
                    'hidden': !toggleCustonSpaceOption,
                },
            )}>
            {customSpaces.map((customSpace: any, index: number) => (
                <OptionGroup key={index} index={index} customSpace={customSpace} />
            ))}
        </div>
    )
}

export function OptionGroup({ index, customSpace }: { index: number, customSpace: any }) {
    return (
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownDividerButton${index}`}>
            <li className="bg-[#186a9c] text-white px-4 py-2">{customSpace._id}</li>
            <Option spaces={customSpace.spaces} />
        </ul>
    )
}

export function Option({ spaces }: { spaces: any[] }) {
    return (
        <>
            {spaces.map((space: { id: string, space_name: string, capacity: string }) => (
                <li key={space.id}>
                    <Link href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">{space.space_name} {space.capacity && <span className="font-latolight">(capacity: {space.capacity})</span>}</Link>
                </li>
            ))}
        </>
    )
}