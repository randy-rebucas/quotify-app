'use client';

import Image from "next/image";

export default function Form() {

    return (
        <form className="main-form">
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
                    <label className="font-latobold text-[24px]">10,000 sqft</label>
                    <input className="hidden px-[10px] py-[5px]" value="10,0000" onChange={e => console.log(e.target.value)} name="space-size" />
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
                    <label className="font-latobold text-[24px]">5,000 sqft</label>
                    <input className="hidden px-[10px] py-[5px]" value="5,0000" onChange={e => console.log(e.target.value)} name="rentable-area" />
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
                    <label className="font-latobold text-[24px]">420</label>
                    <input className="hidden px-[10px] py-[5px]" value="420" onChange={e => console.log(e.target.value)} name="target-headcount" />
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
                    <label className="font-latobold text-[24px]">25%</label>
                    <input className="hidden px-[10px] py-[5px]" value="25" onChange={e => console.log(e.target.value)} name="workspace-assigned" />
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
                    <label className="font-latobold text-[24px]">25%</label>
                    <input className="hidden px-[10px] py-[5px]" value="25" onChange={e => console.log(e.target.value)} name="staff-working-remotely" />
                </li>
            </ul>
        </form>
    )
}