'use client';

import Tooltip from "@/app/shared/tooltip"
import { Amenities, amenities } from "../entities"
import { ChangeEvent, MouseEventHandler, useState } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from 'uuid';

type AreaData = {
    selectedIds: number[]
}

type AreaFormProps = AreaData & {
    updateFields: (fields: Partial<AreaData>) => void
}

type InputProps = {
    space?: string,
    quantity?: number
}

type ItemProps = {
    id: string;
    name: string;
    extra: string | null
};

type OptionProps = {
    id: string;
    name: string;
    items: ItemProps[]
};


export default function BreakdownArea({
    selectedIds,
    updateFields
}: AreaFormProps) {

    const [inputFields, setInputFields] = useState([
        { space: '', quantity: 0 }
    ])

    const handleFormChange = (index: number, event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        // data[index][event.target.name] = event.target.value;
        setInputFields(data);

        // console.log(inputFields);
    }

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedId = event.target.value;
        if (event.target.checked) {
            updateFields({ selectedIds: [...selectedIds, +checkedId] });
        } else {
            updateFields({ selectedIds: selectedIds.filter(id => id !== +checkedId) });
        }
    }

    const MAX_COUNTER = 10;

    const [counter, setCounter] = useState<number>(0);

    const increment = (index: any) => {
        setCounter(prev => (prev == MAX_COUNTER) ? prev : prev + 1);
        let data = [...inputFields];
        data[index]['quantity'] = counter;
        setInputFields(data);
    }

    const decrement = (index: any) => {
        setCounter(prev => (prev == 0) ? 0 : prev - 1);
        let data = [...inputFields];
        data[index]['quantity'] = counter;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { space: '', quantity: 0 }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (index: any) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const options: OptionProps[] = [
        {
            id: uuidv4(),
            name: "conference rooms",
            items: [
                {
                    id: uuidv4(),
                    name: 'phone',
                    extra: 'capacity: 1 - 2'
                },
                {
                    id: uuidv4(),
                    name: 'huddle',
                    extra: 'capacity: 2 - 3'
                },
                {
                    id: uuidv4(),
                    name: 'small',
                    extra: 'capacity: 4 - 6'
                },
                {
                    id: uuidv4(),
                    name: 'medium',
                    extra: 'capacity: 6 - 8'
                },
                {
                    id: uuidv4(),
                    name: 'large',
                    extra: 'capacity: 10 - 12'
                }
            ],
        },
        {
            id: uuidv4(),
            name: "special spaces",
            items: [
                {
                    id: uuidv4(),
                    name: 'reception + waiting area',
                    extra: null
                },
                {
                    id: uuidv4(),
                    name: 'lounge spaces',
                    extra: null
                },
            ]
        }
    ];

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

                                    {amenities.map((amenity: Amenities, index: any) => (
                                        <>
                                            <div className="custom-checkbox mb-4">
                                                <input id={`tmp-${amenity.id}`} type="checkbox" className="promoted-input-checkbox"
                                                    value={amenity.id} checked={selectedIds.includes(amenity.id)} onChange={e => handleCheckboxChange(e)}
                                                />
                                                <svg>
                                                    <use xlinkHref={`#checkmark-${index}`}></use>
                                                </svg>
                                                <label htmlFor={`tmp-${amenity.id}`}>{amenity.amenityName}</label>
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} >
                                                    <symbol id={`checkmark-${index}`} viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeMiterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                        </path>
                                                    </symbol>
                                                </svg>
                                            </div>
                                        </>
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
                        {inputFields.map((input: any, index: any) => (
                            <>
                                <div className="flex gap-5 items-center js-more-space justify-start mt-[3.704vh]" key={index}>
                                    <div className="js-more-space__block flex items-center justify-start gap-5">
                                        <select name="space" value={input.space} id='spaceSelect' className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left" onChange={e => handleFormChange(index, e)}>
                                            {options.map((group: any) => (
                                                <optgroup className="py-3 text-gray-700 dark:text-gray-200" label={group.name} key={group.id}>
                                                    {group.items.map((item: any) => (
                                                        <option value={item.name} key={item.id} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{item.name}
                                                            {item.extra && (item.extra)}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                        <div className="flex items-center justify-start">
                                            <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
                                            <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                                                <input
                                                    type="number"
                                                    name='quantity'
                                                    id="counter-input"
                                                    value={input.quantity}
                                                    onChange={e => handleFormChange(index, e)}
                                                    className="flex-shrink-0 text-gray-900 dark:text-white bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60"
                                                    required />
                                                <div className="flex flex-col">
                                                    <button
                                                        type="button"
                                                        id="increment-button"
                                                        onClick={() => increment(index)}
                                                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                            <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        id="decrement-button"
                                                        onClick={() => decrement(index)}
                                                        className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                            <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <Dropdown {...input} updateInput={updateInput} />

                                    <Quantity /> */}
                                    </div>
                                    {index > 0 && <button type="button" className="bg-red/40 px-3 py-3 shadow text-white" onClick={() => removeFields(index)}>
                                        Remove
                                    </button>}
                                </div>
                            </>

                        ))}
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

export function Quantity() {

    const MAX_COUNTER = 10;

    const [counter, setCounter] = useState<number>(0);

    const increment = () => {
        setCounter(prev => (prev == MAX_COUNTER) ? prev : prev + 1);
    }

    const decrement = () => {
        setCounter(prev => (prev == 0) ? 0 : prev - 1);
    }

    return (
        <>
            <div className="flex items-center justify-start">
                <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
                <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                    <input type="text" id="counter-input"
                        value={counter}
                        className="flex-shrink-0 text-gray-900 dark:text-white bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60"
                        required />

                    <div className="flex flex-col">
                        <button
                            type="button"
                            id="increment-button"
                            onClick={increment}
                            className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            id="decrement-button"
                            onClick={decrement}
                            className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

type DropdownData = {
    selected: string
}

type DropDownProps = InputProps & {
    updateInput: (fields: Partial<InputProps>) => void
}

export function Dropdown({ space, updateInput }: DropDownProps) {
    // const [selectedItem, setSelectedItem] = useState<string | null>('');
    const [openOption, setOpenOption] = useState<boolean>(false);

    const handleItemClick = () => {
        setOpenOption(!openOption);
    };

    const handleOptionClick = (item?: any) => {
        console.log(item);
        // setSelectedItem(item);
        setOpenOption(!openOption);
        updateInput({ space: item });
    };

    { space }

    return (
        <div className="relative">
            <button onClick={handleItemClick} className="text-black mr-[50px] border-b-[1px] border-solid border-[#005A92] min-w-[263px] focus:outline-none px-0 py-2.5 text-left inline-flex items-center justify-between" type="button">
                <span className="px-3">{space}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none" className={clsx(
                    '',
                    {
                        'rotate-180': openOption
                    },
                )}>
                    <path d="M1 1L9 9L17 1" stroke="#005A92"></path>
                </svg>
            </button>

            <DropdownOption open={openOption} onClick={handleOptionClick} />
        </div>
    )
}

export function DropdownOption({ open, onClick }: { open: boolean, onClick: MouseEventHandler<HTMLLIElement> }) {

    type ItemProps = {
        name: string;
        extra: string | null
    };

    type OptionProps = {
        name: string;
        items: ItemProps[]
    };

    const options: OptionProps[] = [
        {
            name: "conference rooms",
            items: [
                {
                    name: 'phone',
                    extra: 'capacity: 1 - 2'
                },
                {
                    name: 'huddle',
                    extra: 'capacity: 2 - 3'
                },
                {
                    name: 'small',
                    extra: 'capacity: 4 - 6'
                },
                {
                    name: 'medium',
                    extra: 'capacity: 6 - 8'
                },
                {
                    name: 'large',
                    extra: 'capacity: 10 - 12'
                }
            ],
        },
        {
            name: "special spaces",
            items: [
                {
                    name: 'reception + waiting area',
                    extra: null
                },
                {
                    name: 'lounge spaces',
                    extra: null
                },
            ]
        }
    ];

    return (
        <div id="dropdownDivider"
            className={clsx(
                'z-10 bg-[#f2f7fa] rounded-0 divide-y divide-gray-100 shadow w-60',
                {
                    'block': open,
                    'hidden': !open
                },
            )}
            style={{ position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: `translate(0px, 32px)` }}>
            {options.map((group: any, index: any) => (
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton" key={index}>
                    <li className="bg-[#186a9c] text-white px-4 py-2">{group.name}</li>
                    {group.items.map((option: any, index: any) => (
                        <li onClick={() => onClick(option.name)} className="cursor-pointer block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]" key={index}>{option.name}
                            {option.extra && <span className="font-latolight">({option.extra})</span>}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}