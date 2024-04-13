import Image from "next/image";

export default function Detail() {
    return (
        <div className="js-open-results-content open-results-content wrapper__content-2 js-linear-anim-2 el !absolute top-0 left-0 !z-30">

            <div className="grid lg:grid-cols-5 lg:grid-flow-col h-full min-h-900">

                <div className="file col-span-1 flex flex-col justify-between  relative bg-black">
                    <div className="file-map absolute top-0 left-0 w-full h-full z-10"></div>
                    <div className="file-img h-full" data-lat="48.895651" data-long="2.290569" data-color="transparent">
                        <div className="flex flex-col justify-between relative z-10 h-full p-30 overflow-x-hidden overflow-y-scroll">
                            <div>
                                <Image
                                    src="/images/icon-file.svg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="mb-5 filter brightness-200 invert w-full h-auto"
                                    alt="file"
                                />
                                <h2>Project<br />MMoser</h2>

                                <div className="file__border bg-white"></div>

                                <div className="file__address">
                                    510 W Hastings St.<br />
                                    Suite 1300<br />
                                    Vancouver, BC<br />
                                    V6B 1L8
                                </div>

                                <div className="text-white mt-2 pt-[10.093vh]">
                                    <ul>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-space-size.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">space size</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">10,000 sqft</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-rentable-area.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">rentable area</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">5,000 sqft</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-target-headcount.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">target headcount</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">420</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-workspace.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">workspace assigned</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">25%</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-staff.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">staff working remotely</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">25%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="estimation.html" className="flex text-[24px] text-white opacity-50 hover:opacity-1">
                                <Image
                                    src="/images/icon-create.svg"
                                    width={15}
                                    height={15}
                                    className="w-[16px]"
                                    alt="create-new"
                                />
                                <div className="pl-2">add estimate</div>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-3 col-span-12 lg:col-start-2 row-end-2 min-h-900 relative">
                    <div className="close-btn opacity-1 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-results">
                            <Image
                                src="/images/icon-close.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="filter contrast-200 brightness-200 w-full h-auto"
                                alt="close"
                            />
                        </a>
                    </div>

                    <div className="grid lg:grid-cols-3 lg:grid-flow-col relative h-full">

                        <div className="file file-1 overflow-x-hidden overflow-y-scroll relative col-span-1 bg-black1 flex flex-col justify-between">
                            <div className="px-30 pb-30 pt-10 h-full flex flex-col justify-between">
                                <div className="flex flex-col justify-start relative z-10">
                                    <ul className="text-white opacity-50">
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#8C8C8C" />
                                                    <rect y="17" width="16" height="2" fill="#8C8C8C" />
                                                </svg>
                                                <div className="ml-3">download</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="#8A8A8A" />
                                                </svg>
                                                <div className="ml-3">share</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.914 12.8C2.954 12.8 2.994 12.796 3.034 12.79L6.398 12.2C6.438 12.192 6.476 12.174 6.504 12.144L14.982 3.666C15.0005 3.6475 15.0153 3.62552 15.0253 3.60133C15.0353 3.57713 15.0405 3.55119 15.0405 3.525C15.0405 3.49881 15.0353 3.47287 15.0253 3.44867C15.0153 3.42448 15.0005 3.4025 14.982 3.384L11.658 0.058C11.62 0.02 11.57 0 11.516 0C11.462 0 11.412 0.02 11.374 0.058L2.896 8.536C2.866 8.566 2.848 8.602 2.84 8.642L2.25 12.006C2.23054 12.1131 2.2375 12.2234 2.27025 12.3273C2.30301 12.4311 2.36059 12.5254 2.438 12.602C2.57 12.73 2.736 12.8 2.914 12.8ZM4.262 9.312L11.516 2.06L12.982 3.526L5.728 10.778L3.95 11.092L4.262 9.312ZM15.36 14.48H0.64C0.286 14.48 0 14.766 0 15.12V15.84C0 15.928 0.072 16 0.16 16H15.84C15.928 16 16 15.928 16 15.84V15.12C16 14.766 15.714 14.48 15.36 14.48Z" fill="#878787" />
                                                </svg>
                                                <div className="ml-3">edit</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="mt-[13.333vh]">
                                        <ul className="flex justify-between text-white opacity-50 mb-30">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M12.5 8H15M10.5 1H15V15H1V1H5L8 3L10.5 1ZM7 15V8V15ZM4.5 8H9.5H4.5Z" stroke="white" strokeOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">10,000 sqft</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.95512 7.68806C9.15512 7.68806 10.0885 6.71029 10.0885 5.51029C10.0885 4.31029 9.11068 3.37695 7.91068 3.37695C6.71068 3.37695 5.77734 4.35473 5.77734 5.51029C5.77734 6.71029 6.75512 7.68806 7.95512 7.68806ZM7.91068 4.26584C7.95512 4.26584 7.95512 4.26584 7.91068 4.26584C8.62179 4.26584 9.19957 4.84362 9.19957 5.55473C9.19957 6.26584 8.62179 6.79918 7.91068 6.79918C7.19957 6.79918 6.66623 6.2214 6.66623 5.55473C6.66623 4.84362 7.24401 4.26584 7.91068 4.26584Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M14.5327 7.42305C13.6882 6.66749 12.5771 6.26749 11.4216 6.31194H11.066C10.9771 6.66749 10.8438 6.9786 10.666 7.24527C10.9327 7.20083 11.1549 7.20083 11.4216 7.20083C12.266 7.15638 13.1105 7.42305 13.7771 7.91194V11.1119H14.666V7.55638L14.5327 7.42305Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M10.3996 3.46571C10.6218 2.93238 11.244 2.66571 11.8218 2.88793C12.3551 3.11016 12.6218 3.73238 12.3996 4.31016C12.2218 4.71016 11.8218 4.97682 11.4218 4.97682C11.3329 4.97682 11.1996 4.97682 11.1107 4.93238C11.1551 5.1546 11.1551 5.37682 11.1551 5.5546V5.82127C11.244 5.82127 11.3329 5.86571 11.4218 5.86571C12.5329 5.86571 13.4218 4.97682 13.4218 3.91016C13.4218 2.79905 12.5329 1.91016 11.4662 1.91016C10.7551 1.91016 10.1329 2.26571 9.77734 2.88793C9.99957 3.02127 10.2218 3.19905 10.3996 3.46571Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M5.33398 7.28825C5.15621 7.02158 5.02287 6.71047 4.93398 6.35491H4.57843C3.42287 6.31047 2.31176 6.71047 1.46732 7.42158L1.33398 7.55491V11.1105H2.22287V7.91047C2.93398 7.42158 3.73398 7.15491 4.57843 7.19936C4.8451 7.19936 5.11176 7.2438 5.33398 7.28825Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M4.57811 5.8237C4.667 5.8237 4.75589 5.8237 4.84478 5.77926V5.51259C4.84478 5.29037 4.84478 5.06815 4.88922 4.89037C4.80033 4.93481 4.667 4.93481 4.57811 4.93481C4.00033 4.93481 3.51144 4.44593 3.51144 3.86815C3.51144 3.29037 4.00033 2.80148 4.57811 2.80148C5.02255 2.80148 5.42255 3.06815 5.60033 3.46815C5.77811 3.24593 6.04478 3.0237 6.267 2.84593C5.68922 1.91259 4.48922 1.60148 3.55589 2.17926C2.62255 2.75704 2.31144 3.95704 2.88922 4.89037C3.24478 5.46815 3.867 5.8237 4.57811 5.8237Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M11.6009 10.0882L11.512 9.95491C10.6231 8.97713 9.37865 8.39935 8.04531 8.4438C6.71198 8.39935 5.42309 8.97713 4.5342 9.95491L4.44531 10.0882V13.466C4.44531 13.866 4.75642 14.2216 5.20087 14.2216H10.8898C11.2898 14.2216 11.6453 13.866 11.6453 13.466V10.0882H11.6009ZM10.712 13.3327H5.3342V10.3994C6.04531 9.68824 7.02309 9.33269 8.04531 9.33269C9.02309 9.28824 10.0009 9.68824 10.712 10.3994V13.3327Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">300</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.00065 4H14.0007C14.3673 4 14.6673 4.3 14.6673 4.66667C14.6673 5.03333 14.3673 5.33333 14.0007 5.33333V12.6667H12.6673V11.3333H10.0007V12.6667H8.66732V5.33333H3.33398V12.6667H2.00065V5.33333C1.63398 5.33333 1.33398 5.03333 1.33398 4.66667C1.33398 4.3 1.63398 4 2.00065 4ZM10.6673 7V7.33333H12.0007V7C12.0007 6.81333 11.854 6.66667 11.6673 6.66667H11.0007C10.814 6.66667 10.6673 6.81333 10.6673 7ZM10.6673 9.66667V10H12.0007V9.66667C12.0007 9.48 11.854 9.33333 11.6673 9.33333H11.0007C10.814 9.33333 10.6673 9.48 10.6673 9.66667Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">120</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M12.7815 5.36403L6.93159 0.164189C6.81271 0.058427 6.65912 0 6.5 0C6.34088 0 6.1873 0.058427 6.06841 0.164189L0.218527 5.36403C0.089581 5.4785 0.0113877 5.63949 0.00114839 5.81161C-0.00909089 5.98373 0.0494627 6.15286 0.163928 6.2818C0.278393 6.41075 0.439393 6.48894 0.611511 6.49918C0.783628 6.50942 0.952764 6.45087 1.08171 6.3364L1.3001 6.14206V12.35C1.3001 12.5224 1.36859 12.6877 1.49048 12.8096C1.61238 12.9315 1.7777 13 1.95009 13H11.0499C11.2223 13 11.3876 12.9315 11.5095 12.8096C11.6314 12.6877 11.6999 12.5224 11.6999 12.35V6.14206L11.9183 6.3364C12.0472 6.45087 12.2164 6.50942 12.3885 6.49918C12.4737 6.49411 12.5571 6.4723 12.6339 6.43501C12.7107 6.39771 12.7794 6.34565 12.8361 6.2818C12.8928 6.21796 12.9363 6.14357 12.9642 6.0629C12.9922 5.98222 13.0039 5.89683 12.9989 5.81161C12.9938 5.72639 12.972 5.643 12.9347 5.5662C12.8974 5.48941 12.8453 5.42071 12.7815 5.36403ZM4.66964 11.7C4.80201 11.3201 5.04933 10.9908 5.37731 10.7577C5.70528 10.5247 6.09766 10.3995 6.5 10.3995C6.90234 10.3995 7.29472 10.5247 7.62269 10.7577C7.95067 10.9908 8.198 11.3201 8.33036 11.7H4.66964ZM5.52502 8.12515C5.52502 7.93232 5.5822 7.74382 5.68933 7.58348C5.79647 7.42315 5.94874 7.29819 6.12689 7.22439C6.30505 7.1506 6.50108 7.13129 6.69021 7.16891C6.87934 7.20653 7.05306 7.29939 7.18942 7.43574C7.32577 7.57209 7.41863 7.74581 7.45625 7.93494C7.49387 8.12407 7.47456 8.3201 7.40077 8.49825C7.32697 8.67641 7.20201 8.82868 7.04167 8.93581C6.88134 9.04294 6.69283 9.10012 6.5 9.10012C6.24153 9.09977 5.99373 8.99694 5.81097 8.81418C5.6282 8.63141 5.52536 8.38362 5.52502 8.12515ZM10.3999 11.7H9.68429C9.5944 11.2691 9.4179 10.8609 9.1655 10.5002C8.9131 10.1396 8.59005 9.83395 8.21597 9.6019C8.57425 9.19315 8.77277 8.6687 8.77495 8.12515C8.77495 7.5218 8.53527 6.94316 8.10864 6.51653C7.682 6.0899 7.10336 5.85022 6.5 5.85022C5.89665 5.85022 5.318 6.0899 4.89137 6.51653C4.46473 6.94316 4.22505 7.5218 4.22505 8.12515C4.22723 8.6687 4.42575 9.19315 4.78404 9.6019C4.40983 9.83389 4.08666 10.1395 3.83414 10.5002C3.58162 10.8608 3.40503 11.269 3.31506 11.7H2.60008V4.98639L6.5 1.52005L10.3999 4.98639V11.7Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">20%</div>
                                            </li>
                                        </ul>

                                        <h2>standard estimate</h2>

                                        <p>this is the estimate description, which was entered when this variation was created.</p>

                                        <div className="file__border bg-white"></div>

                                        <div className="text-white mt-2 pt-2 pb-[16.111vh]">
                                            <ul>
                                                <li className="font-latolight pb-2 mb-3">
                                                    leed certification <br />
                                                    <span className="font-latobold">gold</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    well certification <br />
                                                    <span className="font-latobold">platinium</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    new furniture <br />
                                                    <span className="font-latobold">80%</span>
                                                </li>
                                                <li className="font-latolight pb-2">
                                                    brand level <br />
                                                    <span className="font-latobold">standard</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white font-latolight px-30 py-[15px] sticky bottom-0 bg-black z-10">
                                <p className="font-latolight mb-3 text-white">total cost:</p>
                                <span className="text-[45px] font-latoblack">$500,000</span>
                            </div>
                        </div>

                        <div className="file file-2 overflow-x-hidden overflow-y-scroll relative col-span-1 bg-black2 flex flex-col justify-between">
                            <div className="px-30 pb-30 pt-10 h-full flex flex-col justify-between">
                                <div className="flex flex-col justify-start relative z-10">
                                    <ul className="text-white opacity-50">
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#8C8C8C" />
                                                    <rect y="17" width="16" height="2" fill="#8C8C8C" />
                                                </svg>
                                                <div className="ml-3">download</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="#8A8A8A" />
                                                </svg>
                                                <div className="ml-3">share</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.914 12.8C2.954 12.8 2.994 12.796 3.034 12.79L6.398 12.2C6.438 12.192 6.476 12.174 6.504 12.144L14.982 3.666C15.0005 3.6475 15.0153 3.62552 15.0253 3.60133C15.0353 3.57713 15.0405 3.55119 15.0405 3.525C15.0405 3.49881 15.0353 3.47287 15.0253 3.44867C15.0153 3.42448 15.0005 3.4025 14.982 3.384L11.658 0.058C11.62 0.02 11.57 0 11.516 0C11.462 0 11.412 0.02 11.374 0.058L2.896 8.536C2.866 8.566 2.848 8.602 2.84 8.642L2.25 12.006C2.23054 12.1131 2.2375 12.2234 2.27025 12.3273C2.30301 12.4311 2.36059 12.5254 2.438 12.602C2.57 12.73 2.736 12.8 2.914 12.8ZM4.262 9.312L11.516 2.06L12.982 3.526L5.728 10.778L3.95 11.092L4.262 9.312ZM15.36 14.48H0.64C0.286 14.48 0 14.766 0 15.12V15.84C0 15.928 0.072 16 0.16 16H15.84C15.928 16 16 15.928 16 15.84V15.12C16 14.766 15.714 14.48 15.36 14.48Z" fill="#878787" />
                                                </svg>
                                                <div className="ml-3">edit</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="mt-[13.333vh]">
                                        <ul className="flex justify-between text-white opacity-50 mb-30">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M12.5 8H15M10.5 1H15V15H1V1H5L8 3L10.5 1ZM7 15V8V15ZM4.5 8H9.5H4.5Z" stroke="white" strokeOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">10,000 sqft</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.95512 7.68806C9.15512 7.68806 10.0885 6.71029 10.0885 5.51029C10.0885 4.31029 9.11068 3.37695 7.91068 3.37695C6.71068 3.37695 5.77734 4.35473 5.77734 5.51029C5.77734 6.71029 6.75512 7.68806 7.95512 7.68806ZM7.91068 4.26584C7.95512 4.26584 7.95512 4.26584 7.91068 4.26584C8.62179 4.26584 9.19957 4.84362 9.19957 5.55473C9.19957 6.26584 8.62179 6.79918 7.91068 6.79918C7.19957 6.79918 6.66623 6.2214 6.66623 5.55473C6.66623 4.84362 7.24401 4.26584 7.91068 4.26584Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M14.5327 7.42305C13.6882 6.66749 12.5771 6.26749 11.4216 6.31194H11.066C10.9771 6.66749 10.8438 6.9786 10.666 7.24527C10.9327 7.20083 11.1549 7.20083 11.4216 7.20083C12.266 7.15638 13.1105 7.42305 13.7771 7.91194V11.1119H14.666V7.55638L14.5327 7.42305Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M10.3996 3.46571C10.6218 2.93238 11.244 2.66571 11.8218 2.88793C12.3551 3.11016 12.6218 3.73238 12.3996 4.31016C12.2218 4.71016 11.8218 4.97682 11.4218 4.97682C11.3329 4.97682 11.1996 4.97682 11.1107 4.93238C11.1551 5.1546 11.1551 5.37682 11.1551 5.5546V5.82127C11.244 5.82127 11.3329 5.86571 11.4218 5.86571C12.5329 5.86571 13.4218 4.97682 13.4218 3.91016C13.4218 2.79905 12.5329 1.91016 11.4662 1.91016C10.7551 1.91016 10.1329 2.26571 9.77734 2.88793C9.99957 3.02127 10.2218 3.19905 10.3996 3.46571Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M5.33398 7.28825C5.15621 7.02158 5.02287 6.71047 4.93398 6.35491H4.57843C3.42287 6.31047 2.31176 6.71047 1.46732 7.42158L1.33398 7.55491V11.1105H2.22287V7.91047C2.93398 7.42158 3.73398 7.15491 4.57843 7.19936C4.8451 7.19936 5.11176 7.2438 5.33398 7.28825Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M4.57811 5.8237C4.667 5.8237 4.75589 5.8237 4.84478 5.77926V5.51259C4.84478 5.29037 4.84478 5.06815 4.88922 4.89037C4.80033 4.93481 4.667 4.93481 4.57811 4.93481C4.00033 4.93481 3.51144 4.44593 3.51144 3.86815C3.51144 3.29037 4.00033 2.80148 4.57811 2.80148C5.02255 2.80148 5.42255 3.06815 5.60033 3.46815C5.77811 3.24593 6.04478 3.0237 6.267 2.84593C5.68922 1.91259 4.48922 1.60148 3.55589 2.17926C2.62255 2.75704 2.31144 3.95704 2.88922 4.89037C3.24478 5.46815 3.867 5.8237 4.57811 5.8237Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M11.6009 10.0882L11.512 9.95491C10.6231 8.97713 9.37865 8.39935 8.04531 8.4438C6.71198 8.39935 5.42309 8.97713 4.5342 9.95491L4.44531 10.0882V13.466C4.44531 13.866 4.75642 14.2216 5.20087 14.2216H10.8898C11.2898 14.2216 11.6453 13.866 11.6453 13.466V10.0882H11.6009ZM10.712 13.3327H5.3342V10.3994C6.04531 9.68824 7.02309 9.33269 8.04531 9.33269C9.02309 9.28824 10.0009 9.68824 10.712 10.3994V13.3327Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">300</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.00065 4H14.0007C14.3673 4 14.6673 4.3 14.6673 4.66667C14.6673 5.03333 14.3673 5.33333 14.0007 5.33333V12.6667H12.6673V11.3333H10.0007V12.6667H8.66732V5.33333H3.33398V12.6667H2.00065V5.33333C1.63398 5.33333 1.33398 5.03333 1.33398 4.66667C1.33398 4.3 1.63398 4 2.00065 4ZM10.6673 7V7.33333H12.0007V7C12.0007 6.81333 11.854 6.66667 11.6673 6.66667H11.0007C10.814 6.66667 10.6673 6.81333 10.6673 7ZM10.6673 9.66667V10H12.0007V9.66667C12.0007 9.48 11.854 9.33333 11.6673 9.33333H11.0007C10.814 9.33333 10.6673 9.48 10.6673 9.66667Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">120</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M12.7815 5.36403L6.93159 0.164189C6.81271 0.058427 6.65912 0 6.5 0C6.34088 0 6.1873 0.058427 6.06841 0.164189L0.218527 5.36403C0.089581 5.4785 0.0113877 5.63949 0.00114839 5.81161C-0.00909089 5.98373 0.0494627 6.15286 0.163928 6.2818C0.278393 6.41075 0.439393 6.48894 0.611511 6.49918C0.783628 6.50942 0.952764 6.45087 1.08171 6.3364L1.3001 6.14206V12.35C1.3001 12.5224 1.36859 12.6877 1.49048 12.8096C1.61238 12.9315 1.7777 13 1.95009 13H11.0499C11.2223 13 11.3876 12.9315 11.5095 12.8096C11.6314 12.6877 11.6999 12.5224 11.6999 12.35V6.14206L11.9183 6.3364C12.0472 6.45087 12.2164 6.50942 12.3885 6.49918C12.4737 6.49411 12.5571 6.4723 12.6339 6.43501C12.7107 6.39771 12.7794 6.34565 12.8361 6.2818C12.8928 6.21796 12.9363 6.14357 12.9642 6.0629C12.9922 5.98222 13.0039 5.89683 12.9989 5.81161C12.9938 5.72639 12.972 5.643 12.9347 5.5662C12.8974 5.48941 12.8453 5.42071 12.7815 5.36403ZM4.66964 11.7C4.80201 11.3201 5.04933 10.9908 5.37731 10.7577C5.70528 10.5247 6.09766 10.3995 6.5 10.3995C6.90234 10.3995 7.29472 10.5247 7.62269 10.7577C7.95067 10.9908 8.198 11.3201 8.33036 11.7H4.66964ZM5.52502 8.12515C5.52502 7.93232 5.5822 7.74382 5.68933 7.58348C5.79647 7.42315 5.94874 7.29819 6.12689 7.22439C6.30505 7.1506 6.50108 7.13129 6.69021 7.16891C6.87934 7.20653 7.05306 7.29939 7.18942 7.43574C7.32577 7.57209 7.41863 7.74581 7.45625 7.93494C7.49387 8.12407 7.47456 8.3201 7.40077 8.49825C7.32697 8.67641 7.20201 8.82868 7.04167 8.93581C6.88134 9.04294 6.69283 9.10012 6.5 9.10012C6.24153 9.09977 5.99373 8.99694 5.81097 8.81418C5.6282 8.63141 5.52536 8.38362 5.52502 8.12515ZM10.3999 11.7H9.68429C9.5944 11.2691 9.4179 10.8609 9.1655 10.5002C8.9131 10.1396 8.59005 9.83395 8.21597 9.6019C8.57425 9.19315 8.77277 8.6687 8.77495 8.12515C8.77495 7.5218 8.53527 6.94316 8.10864 6.51653C7.682 6.0899 7.10336 5.85022 6.5 5.85022C5.89665 5.85022 5.318 6.0899 4.89137 6.51653C4.46473 6.94316 4.22505 7.5218 4.22505 8.12515C4.22723 8.6687 4.42575 9.19315 4.78404 9.6019C4.40983 9.83389 4.08666 10.1395 3.83414 10.5002C3.58162 10.8608 3.40503 11.269 3.31506 11.7H2.60008V4.98639L6.5 1.52005L10.3999 4.98639V11.7Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">20%</div>
                                            </li>
                                        </ul>

                                        <h2>low end estimate</h2>

                                        <p>this is the estimate description, which was entered when this variation was created.</p>

                                        <div className="file__border bg-white"></div>

                                        <div className="text-white mt-2 pt-2 pb-[16.111vh]">
                                            <ul>
                                                <li className="font-latolight pb-2 mb-3">
                                                    leed certification <br />
                                                    <span className="font-latobold">gold</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    well certification <br />
                                                    <span className="font-latobold">platinium</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    new furniture <br />
                                                    <span className="font-latobold">80%</span>
                                                </li>
                                                <li className="font-latolight pb-2">
                                                    brand level <br />
                                                    <span className="font-latobold">standard</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white font-latolight px-30 py-[15px] sticky bottom-0 bg-black z-10">
                                <p className="font-latolight mb-3 text-white">total cost:</p>
                                <span className="text-[45px] font-latoblack">$500,000</span>
                            </div>
                        </div>

                        <div className="file file-3 overflow-x-hidden overflow-y-scroll relative col-span-1 bg-black3 flex flex-col justify-between">
                            <div className="px-30 pb-30 pt-10 h-full flex flex-col justify-between">
                                <div className="flex flex-col justify-start relative z-10">
                                    <ul className="text-white opacity-50">
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#8C8C8C" />
                                                    <rect y="17" width="16" height="2" fill="#8C8C8C" />
                                                </svg>
                                                <div className="ml-3">download</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="#8A8A8A" />
                                                </svg>
                                                <div className="ml-3">share</div>
                                            </a>
                                        </li>
                                        <li className="pb-3">
                                            <a href="#" className="text-[24px] font-latobold flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.914 12.8C2.954 12.8 2.994 12.796 3.034 12.79L6.398 12.2C6.438 12.192 6.476 12.174 6.504 12.144L14.982 3.666C15.0005 3.6475 15.0153 3.62552 15.0253 3.60133C15.0353 3.57713 15.0405 3.55119 15.0405 3.525C15.0405 3.49881 15.0353 3.47287 15.0253 3.44867C15.0153 3.42448 15.0005 3.4025 14.982 3.384L11.658 0.058C11.62 0.02 11.57 0 11.516 0C11.462 0 11.412 0.02 11.374 0.058L2.896 8.536C2.866 8.566 2.848 8.602 2.84 8.642L2.25 12.006C2.23054 12.1131 2.2375 12.2234 2.27025 12.3273C2.30301 12.4311 2.36059 12.5254 2.438 12.602C2.57 12.73 2.736 12.8 2.914 12.8ZM4.262 9.312L11.516 2.06L12.982 3.526L5.728 10.778L3.95 11.092L4.262 9.312ZM15.36 14.48H0.64C0.286 14.48 0 14.766 0 15.12V15.84C0 15.928 0.072 16 0.16 16H15.84C15.928 16 16 15.928 16 15.84V15.12C16 14.766 15.714 14.48 15.36 14.48Z" fill="#878787" />
                                                </svg>
                                                <div className="ml-3">edit</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="mt-[13.333vh]">
                                        <ul className="flex justify-between text-white opacity-50 mb-30">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M12.5 8H15M10.5 1H15V15H1V1H5L8 3L10.5 1ZM7 15V8V15ZM4.5 8H9.5H4.5Z" stroke="white" strokeOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">10,000 sqft</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.95512 7.68806C9.15512 7.68806 10.0885 6.71029 10.0885 5.51029C10.0885 4.31029 9.11068 3.37695 7.91068 3.37695C6.71068 3.37695 5.77734 4.35473 5.77734 5.51029C5.77734 6.71029 6.75512 7.68806 7.95512 7.68806ZM7.91068 4.26584C7.95512 4.26584 7.95512 4.26584 7.91068 4.26584C8.62179 4.26584 9.19957 4.84362 9.19957 5.55473C9.19957 6.26584 8.62179 6.79918 7.91068 6.79918C7.19957 6.79918 6.66623 6.2214 6.66623 5.55473C6.66623 4.84362 7.24401 4.26584 7.91068 4.26584Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M14.5327 7.42305C13.6882 6.66749 12.5771 6.26749 11.4216 6.31194H11.066C10.9771 6.66749 10.8438 6.9786 10.666 7.24527C10.9327 7.20083 11.1549 7.20083 11.4216 7.20083C12.266 7.15638 13.1105 7.42305 13.7771 7.91194V11.1119H14.666V7.55638L14.5327 7.42305Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M10.3996 3.46571C10.6218 2.93238 11.244 2.66571 11.8218 2.88793C12.3551 3.11016 12.6218 3.73238 12.3996 4.31016C12.2218 4.71016 11.8218 4.97682 11.4218 4.97682C11.3329 4.97682 11.1996 4.97682 11.1107 4.93238C11.1551 5.1546 11.1551 5.37682 11.1551 5.5546V5.82127C11.244 5.82127 11.3329 5.86571 11.4218 5.86571C12.5329 5.86571 13.4218 4.97682 13.4218 3.91016C13.4218 2.79905 12.5329 1.91016 11.4662 1.91016C10.7551 1.91016 10.1329 2.26571 9.77734 2.88793C9.99957 3.02127 10.2218 3.19905 10.3996 3.46571Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M5.33398 7.28825C5.15621 7.02158 5.02287 6.71047 4.93398 6.35491H4.57843C3.42287 6.31047 2.31176 6.71047 1.46732 7.42158L1.33398 7.55491V11.1105H2.22287V7.91047C2.93398 7.42158 3.73398 7.15491 4.57843 7.19936C4.8451 7.19936 5.11176 7.2438 5.33398 7.28825Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M4.57811 5.8237C4.667 5.8237 4.75589 5.8237 4.84478 5.77926V5.51259C4.84478 5.29037 4.84478 5.06815 4.88922 4.89037C4.80033 4.93481 4.667 4.93481 4.57811 4.93481C4.00033 4.93481 3.51144 4.44593 3.51144 3.86815C3.51144 3.29037 4.00033 2.80148 4.57811 2.80148C5.02255 2.80148 5.42255 3.06815 5.60033 3.46815C5.77811 3.24593 6.04478 3.0237 6.267 2.84593C5.68922 1.91259 4.48922 1.60148 3.55589 2.17926C2.62255 2.75704 2.31144 3.95704 2.88922 4.89037C3.24478 5.46815 3.867 5.8237 4.57811 5.8237Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M11.6009 10.0882L11.512 9.95491C10.6231 8.97713 9.37865 8.39935 8.04531 8.4438C6.71198 8.39935 5.42309 8.97713 4.5342 9.95491L4.44531 10.0882V13.466C4.44531 13.866 4.75642 14.2216 5.20087 14.2216H10.8898C11.2898 14.2216 11.6453 13.866 11.6453 13.466V10.0882H11.6009ZM10.712 13.3327H5.3342V10.3994C6.04531 9.68824 7.02309 9.33269 8.04531 9.33269C9.02309 9.28824 10.0009 9.68824 10.712 10.3994V13.3327Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">300</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.00065 4H14.0007C14.3673 4 14.6673 4.3 14.6673 4.66667C14.6673 5.03333 14.3673 5.33333 14.0007 5.33333V12.6667H12.6673V11.3333H10.0007V12.6667H8.66732V5.33333H3.33398V12.6667H2.00065V5.33333C1.63398 5.33333 1.33398 5.03333 1.33398 4.66667C1.33398 4.3 1.63398 4 2.00065 4ZM10.6673 7V7.33333H12.0007V7C12.0007 6.81333 11.854 6.66667 11.6673 6.66667H11.0007C10.814 6.66667 10.6673 6.81333 10.6673 7ZM10.6673 9.66667V10H12.0007V9.66667C12.0007 9.48 11.854 9.33333 11.6673 9.33333H11.0007C10.814 9.33333 10.6673 9.48 10.6673 9.66667Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">120</div>
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M12.7815 5.36403L6.93159 0.164189C6.81271 0.058427 6.65912 0 6.5 0C6.34088 0 6.1873 0.058427 6.06841 0.164189L0.218527 5.36403C0.089581 5.4785 0.0113877 5.63949 0.00114839 5.81161C-0.00909089 5.98373 0.0494627 6.15286 0.163928 6.2818C0.278393 6.41075 0.439393 6.48894 0.611511 6.49918C0.783628 6.50942 0.952764 6.45087 1.08171 6.3364L1.3001 6.14206V12.35C1.3001 12.5224 1.36859 12.6877 1.49048 12.8096C1.61238 12.9315 1.7777 13 1.95009 13H11.0499C11.2223 13 11.3876 12.9315 11.5095 12.8096C11.6314 12.6877 11.6999 12.5224 11.6999 12.35V6.14206L11.9183 6.3364C12.0472 6.45087 12.2164 6.50942 12.3885 6.49918C12.4737 6.49411 12.5571 6.4723 12.6339 6.43501C12.7107 6.39771 12.7794 6.34565 12.8361 6.2818C12.8928 6.21796 12.9363 6.14357 12.9642 6.0629C12.9922 5.98222 13.0039 5.89683 12.9989 5.81161C12.9938 5.72639 12.972 5.643 12.9347 5.5662C12.8974 5.48941 12.8453 5.42071 12.7815 5.36403ZM4.66964 11.7C4.80201 11.3201 5.04933 10.9908 5.37731 10.7577C5.70528 10.5247 6.09766 10.3995 6.5 10.3995C6.90234 10.3995 7.29472 10.5247 7.62269 10.7577C7.95067 10.9908 8.198 11.3201 8.33036 11.7H4.66964ZM5.52502 8.12515C5.52502 7.93232 5.5822 7.74382 5.68933 7.58348C5.79647 7.42315 5.94874 7.29819 6.12689 7.22439C6.30505 7.1506 6.50108 7.13129 6.69021 7.16891C6.87934 7.20653 7.05306 7.29939 7.18942 7.43574C7.32577 7.57209 7.41863 7.74581 7.45625 7.93494C7.49387 8.12407 7.47456 8.3201 7.40077 8.49825C7.32697 8.67641 7.20201 8.82868 7.04167 8.93581C6.88134 9.04294 6.69283 9.10012 6.5 9.10012C6.24153 9.09977 5.99373 8.99694 5.81097 8.81418C5.6282 8.63141 5.52536 8.38362 5.52502 8.12515ZM10.3999 11.7H9.68429C9.5944 11.2691 9.4179 10.8609 9.1655 10.5002C8.9131 10.1396 8.59005 9.83395 8.21597 9.6019C8.57425 9.19315 8.77277 8.6687 8.77495 8.12515C8.77495 7.5218 8.53527 6.94316 8.10864 6.51653C7.682 6.0899 7.10336 5.85022 6.5 5.85022C5.89665 5.85022 5.318 6.0899 4.89137 6.51653C4.46473 6.94316 4.22505 7.5218 4.22505 8.12515C4.22723 8.6687 4.42575 9.19315 4.78404 9.6019C4.40983 9.83389 4.08666 10.1395 3.83414 10.5002C3.58162 10.8608 3.40503 11.269 3.31506 11.7H2.60008V4.98639L6.5 1.52005L10.3999 4.98639V11.7Z" fill="white" fillOpacity="0.5" />
                                                </svg>
                                                <div className="ml-2 text-[12px]">20%</div>
                                            </li>
                                        </ul>

                                        <h2>high end estimate</h2>

                                        <p>this is the estimate description, which was entered when this variation was created.</p>

                                        <div className="file__border bg-white"></div>

                                        <div className="text-white mt-2 pt-2 pb-[16.111vh]">
                                            <ul>
                                                <li className="font-latolight pb-2 mb-3">
                                                    leed certification <br />
                                                    <span className="font-latobold">gold</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    well certification <br />
                                                    <span className="font-latobold">platinium</span>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    new furniture <br />
                                                    <span className="font-latobold">80%</span>
                                                </li>
                                                <li className="font-latolight pb-2">
                                                    brand level <br />
                                                    <span className="font-latobold">standard</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white font-latolight px-30 py-[15px] sticky bottom-0 bg-black z-10">
                                <p className="font-latolight mb-3 text-white">total cost:</p>
                                <span className="text-[45px] font-latoblack">$500,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    )
}