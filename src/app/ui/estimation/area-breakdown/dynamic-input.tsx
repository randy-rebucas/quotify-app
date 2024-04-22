import { ICustomSpace } from "@/app/models/CustomSpace";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { v4 as uuid } from 'uuid'

type ProjectCustomSpaceData = {
    space: string;
    quantity: number;
};

const INITIAL_PROJECT_CUSTOM_SPACE_DATA: ProjectCustomSpaceData = {
    space: '',
    quantity: 0
};

export default function DynamicInput({ custom_spaces }: { custom_spaces: any[] }) {

    const [inputFields, setInputFields] = useState<ProjectCustomSpaceData[]>([INITIAL_PROJECT_CUSTOM_SPACE_DATA])

    const handleFormChange = (index: number, event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        // data[index][event.target.name] = event.target.value;
        setInputFields(data);

        // console.log(inputFields);
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
    console.log(custom_spaces);

    const handleOnChange = () => { }
    return (
        <div className="pt-[29.63vh] px-30 w-full">
            <p className="text-[#005A92]">add your custom spaces here</p>
            {inputFields.map((input: any, index: any) => (
                <>
                    {/* <div className="flex gap-5 items-center js-more-space justify-start mt-[3.704vh]" key={uuid()}>
                        <div className="js-more-space__block flex items-center justify-start gap-5">
                            <Select value={input.space} index={index} custom_spaces={custom_spaces} onChange={handleOnChange} />

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
                        </div>
                        {index > 0 && <button type="button" className="bg-red/40 px-3 py-3 shadow text-white" onClick={() => removeFields(index)}>
                            Remove
                        </button>}
                    </div> */}
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
    )
}
{/* <select name="space" value={input.space} id='spaceSelect' className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left" onChange={e => handleFormChange(index, e)}>
                                <optgroup className="py-3 text-gray-700 dark:text-gray-200" label='conference rooms'>
                                    <option value='phone' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">phone (capacity: 1 - 2)</option>
                                    <option value='huddle' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">huddle (capacity: 2 - 3)</option>
                                    <option value='small' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">small (capacity: 4 - 6)</option>
                                    <option value='medium' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">medium (capacity: 6 - 8)</option>
                                    <option value='large' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">large (capacity: 10 - 12)</option>
                                </optgroup>
                                <optgroup className="py-3 text-gray-700 dark:text-gray-200" label='special spaces'>
                                    <option value='reception + waiting area' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">reception + waiting area</option>
                                    <option value='lounge spaces' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">lounge spaces</option>
                                </optgroup>
                            </select> */}

export function Select({ value, index, custom_spaces, onChange }: { value: string; index: number; custom_spaces: ICustomSpace[]; onChange: ChangeEventHandler<HTMLSelectElement> }) {
    return (
        <select name="space" value={value} id='spaceSelect' className="border-[#005A92] border-b-[1px] border-solid focus:outline-none inline-flex items-center justify-end min-w-[263px] mr-[50px] px-0 py-1 text-black text-left" onChange={onChange}>
            {custom_spaces.map((custom_space: ICustomSpace) => (
                <>
                    {custom_space._id &&
                        <optgroup key={custom_space._id} className="py-3 text-gray-700 dark:text-gray-200" label={custom_space._id}>
                            {custom_space.spaces.map((space: any, index: number) => (
                                <option key={index} value={space.space_name} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{space.space_name} {space.capacity && <>(capacity: {space.capacity})</>}</option>
                            ))}
                        </optgroup>}
                </>
            ))}
        </select>
    )
}