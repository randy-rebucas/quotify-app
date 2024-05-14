'use client';

import Image from "next/image";

type BaseBuildingData = {
    baseBuildingConditionFinishLevel: string
}

type MepFormProps = BaseBuildingData & {
    updateFields: (fields: Partial<FormData>) => void
}

export default function Flooring({
    baseBuildingConditionFinishLevel,
    updateFields
}: MepFormProps) {
    return (
        <>
            <div className="col-start-1 col-span-4">
                <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">office space</h3>
                <div className="grid grid-cols-4">
                    <div data-category="office space" data-value="silver" data-col="1"
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
                            <h4 className="font-weight font-latobold mt-2">Silver</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="office space" data-value="gold" data-col="2"
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
                            <h4 className="font-weight font-latobold mt-2">Gold</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="office space" data-value="platinium" data-col="3"
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
                            <h4 className="font-weight font-latobold mt-2">Platinium</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="office space" data-value="whs" data-col="4"
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
                            <h4 className="font-weight font-latobold mt-2">WHS</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-start-1 col-span-4">
                <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">reception</h3>
                <div className="grid grid-cols-4">
                    <div data-category="reception" data-value="silver" data-col="1"
                        className="js-select-option col-start-1 row-start-3 col-span-1 flex flex-col justify-between items-start w-full h-full">
                        <div className="p-30">
                            <Image
                                src="/images/img-economic.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="economic"
                                className="grayscale w-full h-auto"
                            />
                            <h4 className="font-weight font-latobold mt-2">Silver</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="reception" data-value="gold" data-col="2"
                        className="js-select-option col-start-2 row-start-3 col-span-1 flex flex-col justify-between items-start w-full h-full">
                        <div className="p-30">
                            <Image
                                src="/images/img-economic.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="economic"
                                className="grayscale w-full h-auto"
                            />
                            <h4 className="font-weight font-latobold mt-2">Gold</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="reception" data-value="platinium" data-col="3"
                        className="js-select-option col-start-3 row-start-3 col-span-1 flex flex-col justify-between items-start w-full h-full">
                        <div className="p-30">
                            <Image
                                src="/images/img-economic.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="economic"
                                className="grayscale w-full h-auto"
                            />
                            <h4 className="font-weight font-latobold mt-2">Platinium</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div data-category="reception" data-value="whs" data-col="4"
                        className="js-select-option col-start-4 row-start-3 col-span-1 flex flex-col justify-between items-start w-full h-full">
                        <div className="p-30">
                            <Image
                                src="/images/img-economic.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="economic"
                                className="grayscale w-full h-auto"
                            />
                            <h4 className="font-weight font-latobold mt-2">WHS</h4>
                            <p className="font-lato mt-1">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}