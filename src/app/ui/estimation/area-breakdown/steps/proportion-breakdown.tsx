import Accordions from "../accordions"
import { PieChartPresentation } from "../../pie-chart-presentation"
import Tooltip from "@/app/ui/tooltip"
import { useEffect, useState } from "react"
import { IAmenity } from "@/app/models/Amenity"
import { useAreaBreakdownStore } from "@/app/lib/store/areaBreakdownStore"
import { useRouter } from "next/navigation"

type Props = {
    amenities: any;
    custom_spaces: any;
    project_id: string;
}

export default function ProportionBreakdown({
    amenities,
    custom_spaces,
    project_id
}: Props) {
    const router = useRouter();
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const reset = useAreaBreakdownStore(state => state.reset);

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const [breakdowns, setBreakdowns] = useState<any[]>([]);

    useEffect(() => {
        let newAmenities: (IAmenity | undefined)[] = [];

        areaBreakdown.selectedAmenityIds.map((selectedAmenity: any) => {
            const foundAmenity = amenities.find((item: any) => item._id === selectedAmenity);
            newAmenities.push(foundAmenity);
        })

        const groupItemRestById = (collector: any, item: any) => {
            const { categoryName, ...rest } = item;
            const groupList = collector[categoryName] || (collector[categoryName] = []);

            groupList.push(rest);

            return collector;
        }
        setBreakdowns(Object.entries(newAmenities.reduce(groupItemRestById, {})));

    }, [amenities, areaBreakdown])


    // update this to action and implement dispatch
    async function handleClick() {
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            let form_data = { ...areaBreakdown, ...{ projectId: project_id } };

            const response = await fetch('/api/project/definition', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form_data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            let projectResponse = await response.json();

            if (response.status === 200) {
                reset();
                
                router.push(`/estimation/project-definition/${projectResponse.id}`)
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

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

                                <Accordions amenities={amenities} customSpaces={custom_spaces} />

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
                            <PieChartPresentation width={480} height={480} breakdowns={breakdowns} />
                        </div>
                    </div>
                </div>
                <div className="p-30 w-full flex items-end justify-end">
                    <button className="focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                            fill="none">
                            <path
                                d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                                fill="#003855" />
                        </svg>
                    </button>
                </div>
            </div>

        </>
    )
}