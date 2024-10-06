'use client';

import { useAppStore } from "@/lib/store/appStore";
import Image from "next/image";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

export default function Form({ isEdit, project, setEdit }: { isEdit: boolean, project: any, setEdit: Dispatch<SetStateAction<boolean>> }) {
    const [error, setError] = useState<string | null>(null)
    const setIsLoading = useAppStore(state => state.setIsLoading);

    const [formData, setFormData] = useState({
        approximateSize: project.spaceSize,
        rentableArea: project.rentableArea,
        targetHeadcount: project.headCount,
        seatingPercentage: project.seatingPercentage
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const response = await fetch(`/api/project/${project._id}`, {
                method: 'POST',
                body: JSON.stringify({
                    approximateSize: formData.approximateSize,
                    rentableArea: formData.rentableArea,
                    targetHeadcount: formData.targetHeadcount,
                    seatingPercentage: formData.seatingPercentage
                }),
            });

            await response.json();

            setIsLoading(false) // Set loading to false when the request completes
        } catch (error: any) {
            setError(error.message)
        } finally {
            setEdit(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="main-form">
            <ul>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src={'https://quotify.b-cdn.net/icon-mini-space-size.svg'}
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">space size</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{Number(formData.approximateSize).toLocaleString()} sqft</label>}
                    {isEdit && <>
                        <input id="small-range" name="approximateSize" type="range"
                            min={1000}
                            max={300000}
                            step={1000}
                            value={formData.approximateSize}
                            onChange={handleInputChange}
                            className="w-full h-1 mb-6 bg-white-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-white-700" />
                        <div className="font-lato text-[12px]"><span>{Number(formData.approximateSize).toLocaleString()}</span> sqft</div>
                    </>}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src={'https://quotify.b-cdn.net/icon-mini-rentable-area.svg'}
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">rentable area</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{Number(formData.rentableArea).toLocaleString()} sqft</label>}
                    {isEdit && <>
                        <input id="small-range" name="rentableArea" type="range"
                            min={1000}
                            max={300000}
                            step={1000}
                            value={formData.rentableArea}
                            onChange={handleInputChange}
                            className="w-full h-1 mb-6 bg-white-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-white-700" />
                        <div className="font-lato text-[12px]"><span>{Number(formData.rentableArea).toLocaleString()}</span> sqft</div>
                    </>}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src={'https://quotify.b-cdn.net/icon-mini-workspace.svg'}
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">workspace assigned</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{formData.seatingPercentage}%</label>}
                    {isEdit && <>
                        <input id="small-range" type="range" name="seatingPercentage"
                            min={0}
                            max={100}
                            step={10}
                            value={formData.seatingPercentage}
                            onChange={handleInputChange}
                            className="w-full h-1 mb-6 bg-white-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-white-700" />
                        <div className="font-lato text-[12px]"><span>{formData.seatingPercentage}</span>%</div>
                    </>}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src={'https://quotify.b-cdn.net/icon-mini-target-headcount.svg'}
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">target headcount</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{formData.targetHeadcount}</label>}
                    {isEdit && <input type="text" className=" px-[10px] py-[5px] text-black" value={formData.targetHeadcount} onChange={handleInputChange} name="targetHeadcount" />}
                </li>
                {/* <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src={'https://quotify.b-cdn.net/icon-mini-staff.svg'}
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">staff working remotely</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{project.staffWorkRemotely}%</label>}
                    {isEdit && <input type="text" readOnly className=" px-[10px] py-[5px] text-black" value={100 - (+formData.seatingPercentage)} name="staff-working-remotely" />}
                </li> */}
            </ul>
            {isEdit && <button type="submit" className="border-2 p-2 rounded-lg">Update</button>}
        </form>
    )
}