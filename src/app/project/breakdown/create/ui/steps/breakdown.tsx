import Tooltip from "@/app/shared/tooltip"

type AreaData = {
    approximateSize: string
    rentableArea: string
    isBaseOnHeadCount: boolean
}

type AreaFormProps = AreaData & {
    updateFields: (fields: Partial<AreaData>) => void
}

export default function Breakdown({
    approximateSize,
    rentableArea,
    isBaseOnHeadCount,
    updateFields
}: AreaFormProps) {


    return (
        <>
            <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="p-30 pt-[6.852vh]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="h-1 w-20 bg-black"></div>

                                <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                    proportions breakdown
                                </h5>

                                <div className="mt-[11.852vh] w-full">
                                    <p>based on the areas you defined and the square footage of your space, we
                                        have generated how much space each area would take. you can review and
                                        adjust the percentages to freflect your specific spaces.</p>
                                </div>

                                <div className="mt-[5.556vh] text-[#505050] flex text-[12px] items-center justify-end border-b-gray-100">
                                    collapse all / expand all
                                </div>

                                <div id="custom-accordion" className="custom-accordion" data-accordion="collapse" data-active-classNamees="bg-transparent">
                                    {/* <!--accordion 1--> */}
                                    <h4 id="custom-accordion-heading-1">
                                        <button type="button" data-accordion-target="#custom-accordion-body-1" aria-expanded="false" aria-controls="custom-accordion-body-1" className="text-gray-500 dark:text-gray-400">
                                            <div className="custom-accordion__header">
                                                <div className="w-[170px] text-[18px]">
                                                    <div className="flex">
                                                        <div className="text-[24px] font-latobold mr-[30px]">60%
                                                        </div>
                                                        <div className="text-[12px] font-light">3,000 sqft</div>
                                                    </div>
                                                    <div className="text-left text-[18px] leading-[18px]">Individual
                                                        spaces</div>
                                                </div>
                                                <div className="custom-accordion__legend bg-[#005A92]"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                    <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                                                </svg>
                                            </div>
                                            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5"></path>
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id="custom-accordion-body-1" className="hidden" aria-labelledby="custom-accordion-heading-1">
                                        <div className="pt-0 py-[40px] border-b border-gray-200 dark:border-gray-700">
                                            <ul className="ps-[40px] list-none">
                                                <li><span>80%</span> - Open workspaces</li>
                                                <li><span>20%</span> - Enclosed offices</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--accordion 2--> */}
                                    <h4 id="custom-accordion-heading-2">
                                        <button type="button" data-accordion-target="#custom-accordion-body-2" aria-expanded="false" aria-controls="custom-accordion-body-2" className="text-gray-500 dark:text-gray-400">
                                            <div className="custom-accordion__header">
                                                <div className="w-[170px] text-[18px]">
                                                    <div className="flex">
                                                        <div className="text-[24px] font-latobold mr-[30px]">20%
                                                        </div>
                                                        <div className="text-[12px] font-light">3,000 sqft</div>
                                                    </div>
                                                    <div className="text-left text-[18px] leading-[18px]">Conference
                                                        rooms</div>
                                                </div>
                                                <div className="custom-accordion__legend bg-[#3179A6]"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                    <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                                                </svg>
                                            </div>
                                            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5"></path>
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id="custom-accordion-body-2" className="hidden" aria-labelledby="custom-accordion-heading-2">
                                        <div className="pt-0 py-[40px] border-b border-gray-200 dark:border-gray-700">
                                            <ul className="ps-[40px] list-none">
                                                <li><span>80%</span> - Open workspaces</li>
                                                <li><span>20%</span> - Enclosed offices</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--accordion 3--> */}
                                    <h4 id="custom-accordion-heading-3">
                                        <button type="button" data-accordion-target="#custom-accordion-body-3" aria-expanded="false" aria-controls="custom-accordion-body-3" className="text-gray-500 dark:text-gray-400">
                                            <div className="custom-accordion__header">
                                                <div className="w-[170px] text-[18px]">
                                                    <div className="flex">
                                                        <div className="text-[24px] font-latobold mr-[30px]">10%
                                                        </div>
                                                        <div className="text-[12px] font-light">3,000 sqft</div>
                                                    </div>
                                                    <div className="text-left text-[18px] leading-[18px]">Food</div>
                                                </div>
                                                <div className="custom-accordion__legend bg-[#6298BA]"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                    <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                                                </svg>
                                            </div>
                                            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5"></path>
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id="custom-accordion-body-3" className="hidden" aria-labelledby="custom-accordion-heading-3">
                                        <div className="pt-0 py-[40px] border-b border-gray-200 dark:border-gray-700">
                                            <ul className="ps-[40px] list-none">
                                                <li><span>80%</span> - Open workspaces</li>
                                                <li><span>20%</span> - Enclosed offices</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--accordion 4--> */}
                                    <h4 id="custom-accordion-heading-4">
                                        <button type="button" data-accordion-target="#custom-accordion-body-4" aria-expanded="false" aria-controls="custom-accordion-body-4" className="text-gray-500 dark:text-gray-400">
                                            <div className="custom-accordion__header">
                                                <div className="w-[170px] text-[18px]">
                                                    <div className="flex">
                                                        <div className="text-[24px] font-latobold mr-[30px]">8%
                                                        </div>
                                                        <div className="text-[12px] font-light">3,000 sqft</div>
                                                    </div>
                                                    <div className="text-left text-[18px] leading-[18px]">Special spaces</div>
                                                </div>
                                                <div className="custom-accordion__legend bg-[#93B7CD]"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                    <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                                                </svg>
                                            </div>
                                            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5"></path>
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id="custom-accordion-body-4" className="hidden" aria-labelledby="custom-accordion-heading-4">
                                        <div className="pt-0 py-[40px] border-b border-gray-200 dark:border-gray-700">
                                            <ul className="ps-[40px] list-none">
                                                <li><span>80%</span> - Open workspaces</li>
                                                <li><span>20%</span> - Enclosed offices</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--accordion 5--> */}
                                    <h4 id="custom-accordion-heading-5">
                                        <button type="button" data-accordion-target="#custom-accordion-body-5" aria-expanded="false" aria-controls="custom-accordion-body-5" className="text-gray-500 dark:text-gray-400">
                                            <div className="custom-accordion__header">
                                                <div className="w-[170px] text-[18px]">
                                                    <div className="flex">
                                                        <div className="text-[24px] font-latobold mr-[30px]">2%
                                                        </div>
                                                        <div className="text-[12px] font-light">3,000 sqft</div>
                                                    </div>
                                                    <div className="text-left text-[18px] leading-[18px]">Support</div>
                                                </div>
                                                <div className="custom-accordion__legend bg-[#C4D6E1]"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                    <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                                                </svg>
                                            </div>
                                            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5"></path>
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id="custom-accordion-body-5" className="hidden" aria-labelledby="custom-accordion-heading-5">
                                        <div className="pt-0 py-[20px] border-b border-gray-200 dark:border-gray-700">
                                            <ul className="ps-[40px] list-none">
                                                <li><span>80%</span> - Open workspaces</li>
                                                <li><span>20%</span> - Enclosed offices</li>
                                            </ul>
                                        </div>
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
                    <div className="pt-[150px] px-30 w-full flex items-center justify-center">
                        {/* <!--pie chart--> */}
                        {/* <div id="pie-example-1" className="w-[500px]">
                            <table className="charts-css pie hide-data">
                                <tbody>
                                    <tr>
                                        <td style="--start: 0.0; --end: 0.60; --color: rgba(0, 90, 146, 1);">
                                            <span className="data"> 60% </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{'--start': 0.60, '--end': 0.62, '--color': rgba(0, 90, 146, 0.2)}}>
                                            <span className="data"> 2% </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="--start: 0.62; --end: 0.70; --color: rgba(0, 90, 146, 0.4);">
                                            <span className="data"> 8% </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="--start: 0.70; --end: 0.80; --color: rgba(0, 90, 146, 0.6);">
                                            <span className="data"> 10% </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="--start: 0.80; --end: 1.0; --color: rgba(0, 90, 146, 0.8);">
                                            <span className="data"> 20%</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}