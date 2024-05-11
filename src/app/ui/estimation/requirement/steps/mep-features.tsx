'use client';

import Image from "next/image";
import { RequirementData } from "../entities";

type MepFormProps = RequirementData & {
    updateFields: (fields: Partial<RequirementData>) => void
}

export default function MepFeatures({
    updateFields
}: MepFormProps) {
    {/* MEP features */ }
    return (
        <>
            <div data-col="1"
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
            <div data-col="2"
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
                    <p className="font-weight font-latobold text-green mt-2">Mid</p>
                    <p className="font-lato mt-1">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div data-col="3"
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
                    <p className="font-weight font-latobold text-green mt-2">High</p>
                    <p className="font-lato mt-1">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </>
    )
}