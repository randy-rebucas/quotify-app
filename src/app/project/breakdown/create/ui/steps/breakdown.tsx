import Tooltip from "@/app/shared/tooltip"
import AccordionContainer from "../breakdown"
import { FormData } from "../entities"
import { PieChartPresentation } from "@/app/project/definition/ui/pie-chart-presentation"
import { pieColors, pieData } from "@/app/project/definition/ui/data"

type AreaFormProps = FormData & {
    updateFields: (fields: Partial<FormData>) => void
}

export default function Breakdown({
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

                                <AccordionContainer />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-start-3 lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full">
                <Tooltip />

                <div className="flex flex-col justify-start items-end w-full h-full">
                    <div className="pt-[100px] px-30 w-full flex items-center justify-center">
                        {/* <!--pie chart--> */}
                        <div id="pie-example-1" className="py-[60px] w-[500px] flex items-center justify-center">
                            <PieChartPresentation data={pieData} width={480} height={480} colors={pieColors} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}