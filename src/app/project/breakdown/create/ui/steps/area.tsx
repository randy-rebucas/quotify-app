import Tooltip from "@/app/shared/tooltip"

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

                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-1" type="checkbox" className="promoted-input-checkbox"
                                            value={1} checked={isBaseOnHeadCount} onChange={e => updateFields({ isBaseOnHeadCount: e.target.checked })}
                                        />
                                        <svg>
                                            <use xlinkHref="#checkmark-1"></use>
                                        </svg>
                                        <label htmlFor="tmp-1">reception</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-1" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-2" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-2"></use>
                                        </svg>
                                        <label htmlFor="tmp-2">focus rooms / workstations</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-3" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-3"></use>
                                        </svg>
                                        <label htmlFor="tmp-3">pantry / coffee point</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-3" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-4" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-4"></use>
                                        </svg>
                                        <label htmlFor="tmp-4">kitchen</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-4" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-5" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-5"></use>
                                        </svg>
                                        <label htmlFor="tmp-5">library</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-5" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-6" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-6"></use>
                                        </svg>
                                        <label htmlFor="tmp-6">training room</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-6" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-7" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-7"></use>
                                        </svg>
                                        <label htmlFor="tmp-7">focus rooms / workstations</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-7" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-8" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-8"></use>
                                        </svg>
                                        <label htmlFor="tmp-8">pantry / coffee point</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-8" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-9" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-9"></use>
                                        </svg>
                                        <label htmlFor="tmp-9">kitchen</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-9" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-10" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-10"></use>
                                        </svg>
                                        <label htmlFor="tmp-10">library</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-10" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                                </path>
                                            </symbol>
                                        </svg>
                                    </div>
                                    <div className="custom-checkbox mb-4">
                                        <input id="tmp-11" type="checkbox" className="promoted-input-checkbox" />
                                        <svg>
                                            <use xlinkHref="#checkmark-11"></use>
                                        </svg>
                                        <label htmlFor="tmp-11">training room</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="checkmark-11" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
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
                    <div className="pt-[29.63vh] px-30 w-full">
                        <p className="text-[#005A92]">add your custom spaces here</p>

                        <div className="js-more-space mt-[3.704vh]">
                            <div className="js-more-space__block flex items-center justify-start mt-10">
                                <button id="dropdownSearchButton" data-dropdown-toggle="dropdownDivider" data-dropdown-placement="bottom" className="text-black mr-[50px] border-b-[1px] border-solid border-[#005A92] min-w-[263px] focus:outline-none px-0 py-2.5 text-left inline-flex items-center justify-end" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                        <path d="M1 1L9 9L17 1" stroke="#005A92"></path>
                                    </svg>
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                {/* style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transhtmlForm: translate(0px, 290px);" */}
                                <div id="dropdownDivider" className="z-10 hidden bg-[#f2f7fa] rounded-0 divide-y divide-gray-100 shadow w-60" data-popper-placement="bottom" data-popper-reference-hidden="" data-popper-escaped="">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                        <li className="bg-[#186a9c] text-white px-4 py-2">conference rooms</li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">phone <span className="font-latolight">(capacity: 1 - 2)</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">huddle <span className="font-latolight">(capacity: 2 - 3)</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">small <span className="font-latolight">(capacity: 4 - 6)</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">medium <span className="font-latolight">(capacity: 6 - 8)</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">large <span className="font-latolight">(capacity: 10 - 12)</span></a>
                                        </li>
                                    </ul>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton2">
                                        <li className="bg-[#186a9c] text-white px-4 py-2">special spaces</li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">reception + waiting area</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-6 py-2 text-[#005A92] hover:bg-[#D0D0D0]">lounge spaces</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-center justify-start">
                                    <label htmlFor="counter-input" className="text-[14px] text-[#005A92] text-opacity-60">quantity</label>
                                    <div className="relative flex items-center border-b-[1px] border-solid border-[#005A92] min-w-[78px] justify-between">
                                        <input type="text" id="counter-input" data-input-counter="" className="flex-shrink-0 text-gray-900 dark:text-white bg-transparent text-[24px] focus:outline-none focus:ring-0 max-w-[2.5rem] text-center placeholder:text-opacity-60" placeholder="" value="0" required />

                                        <div className="flex flex-col">
                                            <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                    <path d="M11 5L6 1L1 5" stroke="#005A92"></path>
                                                </svg>
                                            </button>
                                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="py-[2px] flex-shrink-0 bg-transparent focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                    <path d="M1 1L6 5L11 1" stroke="#005A92"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-10">
                            <button className="js-add-space bg-transparent flex">
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