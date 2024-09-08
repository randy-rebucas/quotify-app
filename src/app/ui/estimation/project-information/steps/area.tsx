
import Tooltip from "@/components/tooltip";
import { useProjectInformationStore } from "@/lib/store/projectInformationStore";

export default function Area() {
    const project = useProjectInformationStore(state => state.projectInformation);
    const isBaseOnHeadCount = useProjectInformationStore(state => state.isBaseOnHeadCount);
    const updateFields = useProjectInformationStore(state => state.updateFields);
    const updateIsBaseOnHeadCount = useProjectInformationStore(state => state.updateIsBaseOnHeadCount);

    return (
        <>
            <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30 pt-[6.852vh]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="h-1 w-20 bg-black"></div>
                                <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                    space size & rentable area
                                </h5>

                                <div className="mt-[16.667vh] w-full">
                                    <p className="font-latobold mb-1 text-[24px]">01.3.1:</p>
                                    <p>what is the approximate size of your new space?</p>

                                    <div className="flex flex-col items-start justify-center w-full">
                                        <div className="custom-range-slider mt-[5.556vh] relative w-full">
                                            {/* value="3000" */}
                                            <input id="small-range" type="range"
                                                min={1000}
                                                max={300000}
                                                step={1000}
                                                value={project.approximateSize} onChange={e => updateFields({ approximateSize: e.target.value })}
                                                className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
                                            <span
                                                className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-3">1,000
                                                sqft</span>
                                            <span
                                                className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-3">300,000
                                                sqft</span>
                                        </div>
                                        <div className="mt-[3.704vh] font-latobold text-[30px]"><span>{Number(project.approximateSize).toLocaleString()}</span> sqft</div>
                                    </div>

                                    <div className="custom-checkbox mb-4 mt-[21.204vh]">
                                        <input id="tmp-5" type="checkbox" className="promoted-input-checkbox" value={1} checked={isBaseOnHeadCount} onChange={e => updateIsBaseOnHeadCount(e.target.checked)} />
                                        <svg>
                                            <use href="#checkmark-5" xlinkHref="#checkmark-5" />
                                        </svg>
                                        <label htmlFor="tmp-5">base the size of my space on headcount</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{
                                            display: 'none'
                                        }}>
                                            <symbol id="checkmark-5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeMiterlimit="10" fill="none"
                                                    d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-start-3 lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full">
                <Tooltip />
                <div className="flex flex-col justify-start items-end w-full h-full">
                    <div className="pt-[40.37vh] px-30 w-full">
                        <p className="font-latobold mb-1 text-[24px]">01.3.2:</p>
                        <p>what is the rentable area square footage?</p>

                        <div className="flex flex-col items-start justify-center w-full">
                            <div className="custom-range-slider mt-[5.556vh] relative w-full">
                                {/* value="3000" */}
                                <input id="small-range" type="range"
                                    min={1000}
                                    max={300000}
                                    step={1000}
                                    value={project.rentableArea} onChange={e => updateFields({ rentableArea: e.target.value })}
                                    className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-3">1,000
                                    sqft</span>
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-3">300,000
                                    sqft</span>
                            </div>
                            <div className="mt-[3.704vh] font-latobold text-[30px]"><span>{Number(project.rentableArea).toLocaleString()}</span> sqft</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}