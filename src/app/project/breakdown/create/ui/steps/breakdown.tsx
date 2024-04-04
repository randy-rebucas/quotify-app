import Tooltip from "@/app/shared/tooltip"
import Chart from "react-google-charts"
import AccordionContainer from "../breakdown"
import { FormData } from "../entities"

type AreaFormProps = FormData & {
    updateFields: (fields: Partial<FormData>) => void
}

export default function Breakdown({
    updateFields
}: AreaFormProps) {

    const data = [
        ["Space Area", "Percentage"],
        ["Individual spaces", 60],
        ["Conference rooms", 20],
        ["Food", 10],
        ["Special spaces", 8],
        ["Support", 2],
    ];

    const options = {
        legend: "none",
        pieSliceText: "label",
        // title: "Proportions breakdown",
        chartArea: {
            backgroundColor: {
                fill: '#FF0000',
                fillOpacity: 0.1
            },
        },
        colors: ['#005A92', '#3179A6', '#6298BA', '#93B7CD', '#C4D6E1']
    };

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
                        <div id="pie-example-1" className="w-[500px] flex items-center justify-center">
                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}
                                width={680}
                                height={680}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}