import { useProjectInformationStore } from "@/app/lib/store/projectInformationStore";

export default function HeadCount() {

    const project = useProjectInformationStore(state => state.projectInformation);
    const updateFields = useProjectInformationStore(state => state.updateFields)

    return (
        <>
            <div className="lg:col-span-3 col-span-12 flex flex-col justify-start items-start w-full">
                <div className="h-full w-full">
                    <div className="flex flex-col justify-between h-full p-30">
                        <div>
                            <div className="h-1 w-20 bg-black"></div>
                            <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                headcount & staff
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1 col-span-12 row-start-2 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="pt-[21.296vh] w-full">
                                    <p className="font-latobold mb-1 text-[24px]">01.4.1:</p>
                                    <p>what is your target headcount?</p>

                                    <div className="custom-input flex flex-col justify-start mt-[5.556vh]">
                                        <input className="bg-transparent focus:outline-none border-b-2 border-blue" type="number"
                                            value={project.targetHeadCount} onChange={e => updateFields({ targetHeadCount: e.target.value })} />
                                        <div className="mt-[20px] font-latobold text-[30px]">people</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1 lg:col-start-2 col-span-12 row-start-2 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="pt-[25.926vh] w-full">
                                    <p className="font-latobold mb-1 text-[24px]">01.4.2:</p>
                                    <p>for the remaning headcount, what is the average attendance per week?</p>

                                    <div className="custom-input flex flex-col justify-start mt-[5.556vh]">
                                        <input className="bg-transparent focus:outline-none border-b-2 border-blue" type="number"
                                            value={project.averageAttendance} onChange={e => updateFields({ averageAttendance: e.target.value })} />
                                        <div className="mt-[20px] font-latobold text-[30px]">people</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-start-3 lg:col-span-1 col-span-12 row-start-2 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="pt-[33.333vh] w-full">
                                    <p className="font-latobold mb-1 text-[24px]">01.4.3:</p>
                                    <p>of that headcount, how many people have an assigned seat?</p>

                                    <div className="flex flex-col items-start justify-center w-full">
                                        <div className="custom-range-slider mt-[5.556vh] relative w-full">
                                            <input id="small-range" type="range"
                                                min={0}
                                                max={100}
                                                step={10}
                                                value={project.assignedSeat} onChange={e => updateFields({ assignedSeat: e.target.value })}
                                                className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-3">0%</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-3">100%</span>
                                        </div>
                                        <div className="mt-[40px] font-latobold text-[30px]"><span>{project.assignedSeat}</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
