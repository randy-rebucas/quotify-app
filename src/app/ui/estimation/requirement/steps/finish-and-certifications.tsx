
'use client';

import Image from "next/image";

type FinishData = {
    finishLevel: string;
    finishLevelOfLeed: string;
    finishCertificationRequire: string;
}

type FinishFormProps = FinishData & {
    updateFields: (fields: Partial<FormData>) => void
}

export default function FinishAndCertification({
    finishLevel,
    finishLevelOfLeed,
    finishCertificationRequire,
    updateFields
}: FinishFormProps) {
    console.log();
    return (
        <>
            {/* finish and certifications */}
            {/* <div className="js-step step active">
                <div className="col-span-1 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full w-full">
                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="h-1 w-20 bg-black"></div>
                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        finish and certifications
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <h5 className="font-latobold mt-1 xl:text-2xl text-1xl text-black">
                                    03.1.1:
                                </h5>
                                <p>what is the finish level of your space?</p>
                            </div>
                        </div>
                    </div>

                    <Tooltip />
                </div> */}

                <div data-category="03.1.1" data-value="economic" data-col="1"
                    className="js-select-option col-start-1 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-economic.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">Economic</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.1" data-value="mid" data-col="2"
                    className="js-select-option col-start-2 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-mid.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">Mid</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.1" data-value="high" data-col="3"
                    className="js-select-option col-start-3 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-high.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">High</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                {/* <ActionButtons />
            </div>

            <div className="js-step step">
                <div className="col-span-1 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full w-full">
                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="h-1 w-20 bg-black"></div>
                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        finish and certifications
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <h5 className="font-latobold mt-1 xl:text-2xl text-1xl text-black">
                                    03.1.2:
                                </h5>
                                <p>what level of leed certification do you need in your space?</p>
                            </div>
                        </div>
                    </div>
                    <Tooltip />
                </div>

                <div data-category="03.1.2" data-value="certified" data-col="1"
                    className="js-select-option col-start-1 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <p className="font-weight font-latobold text-green mt-2">Certified</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.2" data-value="silver" data-col="2"
                    className="js-select-option col-start-2 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <p className="font-weight font-latobold text-green mt-2">Silver</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.2" data-value="gold" data-col="3"
                    className="js-select-option col-start-3 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <p className="font-weight font-latobold text-green mt-2">Gold</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.2" data-value="platinium" data-col="4"
                    className="js-select-option col-start-4 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <p className="font-weight font-latobold text-green mt-2">Platinium</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <ActionButtons />
            </div>

            <div className="js-step step">
                <div className="col-span-1 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full w-full">
                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="h-1 w-20 bg-black"></div>
                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        finish and certifications
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <h5 className="font-latobold mt-1 xl:text-2xl text-1xl text-black">
                                    03.1.3:
                                </h5>
                                <p>what well certification does your space require?</p>
                            </div>
                        </div>
                    </div>
                    <Tooltip />
                </div>

                <div data-category="03.1.3" data-value="silver" data-col="1"
                    className="js-select-option col-start-1 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-economic.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">Silver</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.3" data-value="gold" data-col="2"
                    className="js-select-option col-start-2 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-economic.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">Gold</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.3" data-value="platinium" data-col="3"
                    className="js-select-option col-start-3 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-economic.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">Platinium</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div data-category="03.1.3" data-value="whs" data-col="4"
                    className="js-select-option col-start-4 row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full">
                    <div className="p-30">
                        <Image
                            src="/images/img-economic.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="economic"
                            className="grayscale w-full h-auto"
                        />
                        <p className="font-weight font-latobold text-green mt-2">WHS</p>
                        <p className="font-lato mt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <ActionButtons />
            </div> */}
        </>
    )
}