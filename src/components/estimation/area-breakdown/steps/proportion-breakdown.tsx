import Accordions from "../accordions"
import { PieChartPresentation } from "../../pie-chart-presentation"
import Tooltip from "@/components/tooltip";
import { useEffect, useState } from "react"
import { IAmenity } from "@/models/Amenity"
import { useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";


type Props = {
    amenities: any;
    customSpaces: any;
}

export default function ProportionBreakdown({
    amenities,
    customSpaces
}: Props) {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const [breakdowns, setBreakdowns] = useState<any[]>([]);
    const [totalBreakdowns, setTotalBreakdowns] = useState<number>(0);

    useEffect(() => {

        const amenity = areaBreakdown.selectedAmenityIds.map((selectedAmenity: any) => amenities.find((item: any) => item._id === selectedAmenity))
        const customSpace = areaBreakdown.selectedCustomSpaces.map((selectedCustomSpace: any) => customSpaces.find((item: any) => item._id === selectedCustomSpace.space))
        const breakdownGroup = [...amenity, ...customSpace];
        setTotalBreakdowns(breakdownGroup.length);

        const groupItemRestById = (collector: any, item: any) => {
            const { categoryName, ...rest } = item;
            const groupList = collector[categoryName] || (collector[categoryName] = []);

            groupList.push(rest);

            return collector;
        }
        setBreakdowns(Object.entries(breakdownGroup.reduce(groupItemRestById, {})));

    }, [amenities, areaBreakdown, customSpaces])

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

                                <Accordions breakdowns={breakdowns} totalBreakdowns={totalBreakdowns}/>

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
                            <PieChartPresentation width={480} height={480} breakdowns={breakdowns} totalBreakdowns={totalBreakdowns}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}