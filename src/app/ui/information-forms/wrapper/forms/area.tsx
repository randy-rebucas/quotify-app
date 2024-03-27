import Wrapper from "../wrapper";

type AreaData = {
    approximateSize: string
    rentableArea: string
    isBaseOnHeadCount: boolean
}

type AreaFormProps = AreaData & {
    updateFields: (fields: Partial<AreaData>) => void
}

export default function Area({
    approximateSize,
    rentableArea,
    isBaseOnHeadCount,
    updateFields
}: AreaFormProps) {
    return (
        <Wrapper title="Space size & Rentable area">
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
                                        <div className="custom-range-slider mt-[5.556vh]">
                                            {/* value="3000" */}
                                            <input id="small-range" type="range"
                                                min="1000"
                                                max="300000"
                                                value={approximateSize} onChange={e => updateFields({ approximateSize: e.target.value })}
                                                className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
                                            <span
                                                className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-3">1,000
                                                sqft</span>
                                            <span
                                                className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-3">300,000
                                                sqft</span>
                                        </div>
                                        <div className="mt-[3.704vh] font-latobold text-[30px]"><span>300,000</span> sqft</div>
                                    </div>

                                    <div className="custom-checkbox mb-4 mt-[21.204vh]">
                                        <input id="tmp-5" type="checkbox" className="promoted-input-checkbox" value={1} checked={isBaseOnHeadCount} onChange={e => updateFields({ isBaseOnHeadCount: e.target.checked })}/>
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

            <div
                className="lg:col-start-3 lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full">
                <div className="absolute top-0 right-0 pulsate flex flex-col items-end w-full p-30">
                    <button data-tooltip-target="tooltip-step-3" data-tooltip-trigger="click" type="button"
                        className="outline-none">
                        <div className="tooltip pulsate flex flex-col items-end">
                            <svg className="tooltip__icon" xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35"
                                fill="none">
                                <path opacity="0.4"
                                    d="M33.9 19C34 18.3 34 17.6 34 17C34 7.6 26.4 0 17 0C7.6 0 0 7.6 0 17C0 26.4 7.6 34 17 34C20.4 34 23.6 33 26.2 31.3C27.6 33.5 30.1 35 33 35C37.4 35 41 31.4 41 27C41 22.9 37.9 19.5 33.9 19Z"
                                    fill="#003855" />
                                <circle cx="17.0002" cy="17.0002" r="7.65649" fill="#003855" />
                                <circle cx="22.464" cy="22.464" r="1.82143" fill="#003855" />
                                <path
                                    d="M31.9458 29.0554L32.0886 28.8169L32.0225 28.778H31.9458V29.056V29.0554ZM31.9458 25.7221V26H32.0225L32.0892 25.9606L31.9458 25.7221ZM34.7254 24.0554H35.0034C35.0034 24.0062 34.9904 23.9579 34.9656 23.9154C34.9409 23.8729 34.9053 23.8377 34.8625 23.8135C34.8197 23.7892 34.7712 23.7768 34.7221 23.7774C34.6729 23.778 34.6247 23.7916 34.5826 23.8169L34.7254 24.0554ZM34.7254 30.7221L34.5826 30.9606C34.6247 30.9859 34.6729 30.9995 34.7221 31.0001C34.7712 31.0007 34.8197 30.9883 34.8625 30.964C34.9053 30.9398 34.9409 30.9046 34.9656 30.8621C34.9904 30.8196 35.0034 30.7713 35.0034 30.7221H34.7254ZM36.3599 26.4064L36.1631 26.2102L35.77 26.6032L35.9668 26.8L36.3593 26.4064H36.3599ZM37.5385 28.3711L37.7353 28.5673L38.1283 28.1743L37.9315 27.978L37.5385 28.3711ZM37.9321 26.8L38.1283 26.6032L37.7353 26.2102L37.539 26.4064L37.9321 26.8ZM35.9668 27.978L35.77 28.1743L36.1631 28.5673L36.3599 28.3711L35.9668 27.978ZM31.9458 28.7775H30.8339V29.3334H31.9458V28.7775ZM30.8339 28.7775C30.7974 28.7775 30.7612 28.7704 30.7274 28.7565C30.6937 28.7425 30.663 28.722 30.6372 28.6962C30.6114 28.6704 30.5909 28.6397 30.5769 28.606C30.563 28.5722 30.5559 28.536 30.5559 28.4995H30C30 28.9609 30.373 29.3334 30.8339 29.3334V28.7775ZM30.5559 28.4995V26.278H30V28.5006H30.5559V28.4995ZM30.5559 26.2774C30.5559 26.124 30.6799 26 30.8339 26V25.4441C30.373 25.4441 30 25.8166 30 26.278H30.5559V26.2774ZM30.8339 26H31.9458V25.4441H30.8339V26ZM32.0886 25.9606L34.8683 24.2939L34.5826 23.8169L31.8029 25.4836L32.0886 25.9606ZM34.4475 24.0554V30.7221H35.0034V24.0554H34.4475ZM34.8683 30.4836L32.0886 28.8169L31.8029 29.2939L34.5826 30.9606L34.8683 30.4836ZM35.9668 26.8L37.5385 28.3711L37.9315 27.978L36.3593 26.4064L35.9663 26.8H35.9668ZM37.539 26.4064L35.9668 27.978L36.3599 28.3711L37.9321 26.8L37.539 26.4064Z"
                                    fill="#003855" />
                            </svg>
                        </div>
                    </button>

                    <div id="tooltip-step-3" role="tooltip"
                        className="tooltip__content absolute right-5 px-3 py-2 w-[211px] z-10 invisible opacity-0">
                        Throughout your experience, you can toggle the tips to help guide you through each
                        section.
                    </div>
                </div>
                <div className="flex flex-col justify-start items-end w-full h-full">
                    <div className="pt-[40.37vh] px-30 w-full">
                        <p className="font-latobold mb-1 text-[24px]">01.3.2:</p>
                        <p>what is the rentable area square footage?</p>

                        <div className="flex flex-col items-start justify-center w-full">
                            <div className="custom-range-slider mt-[5.556vh]">
                                {/* value="3000" */}
                                <input id="small-range" type="range"
                                    min="1000"
                                    max="300000"
                                    value={rentableArea} onChange={e => updateFields({ rentableArea: e.target.value })}
                                    className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-3">1,000
                                    sqft</span>
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-3">300,000
                                    sqft</span>
                            </div>
                            <div className="mt-[3.704vh] font-latobold text-[30px]"><span>200,000</span> sqft</div>
                        </div>
                    </div>
                </div>
                {/* <div className="p-30 w-full flex items-end justify-end">
                    <button className="js-nextbtn focus:shadow-outline focus:outline-none" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                            fill="none">
                            <path
                                d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                                fill="#003855" />
                        </svg>
                    </button>
                </div> */}
            </div>

        </Wrapper>
    )
}