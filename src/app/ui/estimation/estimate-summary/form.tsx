'use client';

import { useAppStore } from "@/app/lib/store/appStore";
import { useEstimateSummaryStore } from "@/app/lib/store/estimateSummaryStore";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Form({ isEdit, project }: { isEdit: boolean, project: any }) {

    const [error, setError] = useState<string | null>(null)
    const reset = useEstimateSummaryStore(state => state.reset);
    const isLoading = useAppStore(state => state.isLoading);
    const setIsLoading = useAppStore(state => state.setIsLoading);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
        reset();
    }

    return (
        <form onSubmit={onSubmit} className="main-form">
            <ul>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src="/images/icon-mini-space-size.svg"
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">space size</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{Number(project.spaceSize).toLocaleString()} sqft</label>}
                    {isEdit && <input type="text" className="px-[10px] py-[5px] text-black" value={project.spaceSize} onChange={e => console.log(e.target.value)} name="space-size" />}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src="/images/icon-mini-rentable-area.svg"
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">rentable area</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{Number(project.rentableArea).toLocaleString()} sqft</label>}
                    {isEdit && <input type="text" className="px-[10px] py-[5px] text-black" value={project.rentableArea} onChange={e => console.log(e.target.value)} name="rentable-area" />}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src="/images/icon-mini-target-headcount.svg"
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">target headcount</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{project.headCount}</label>}
                    {isEdit && <input type="text" className=" px-[10px] py-[5px] text-black" value={project.headCount} onChange={e => console.log(e.target.value)} name="target-headcount" />}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src="/images/icon-mini-workspace.svg"
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">workspace assigned</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{project.seatingPercentage}%</label>}
                    {isEdit && <input type="text" className=" px-[10px] py-[5px] text-black" value={project.seatingPercentage} onChange={e => console.log(e.target.value)} name="workspace-assigned" />}
                </li>
                <li className="font-latolight pb-2 mb-3">
                    <div className="flex pb-1">
                        <Image
                            src="/images/icon-mini-staff.svg"
                            width={15}
                            height={15}
                            alt=""
                        />
                        <div className="pl-2 text-[14px]">staff working remotely</div>
                    </div>
                    {!isEdit && <label className="font-latobold text-[24px]">{project.averageOfficeAttendance}%</label>}
                    {isEdit && <input type="text" className=" px-[10px] py-[5px] text-black" value={project.averageOfficeAttendance} onChange={e => console.log(e.target.value)} name="staff-working-remotely" />}
                </li>
            </ul>
            {isEdit && <button type="submit" className="border-2 p-2 rounded-lg">Update</button>}
        </form>
    )
}