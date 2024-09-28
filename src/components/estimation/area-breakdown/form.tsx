import { IAmenity } from "@/models/Amenity";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import Wrapper from "./wrapper";
import { useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";
import { useAppStore } from "@/lib/store/appStore";
import toast from "react-hot-toast";
import Link from "next/link";

let stepMap = new Map<number, string>();
stepMap.set(0, "Area Defination");
stepMap.set(1, "Proportion Breakdown");

export default function Form({
    currentStepIndex, isFirstStep, isLastStep, back, next, amenities, projectId, menus, children
}: {
    currentStepIndex: number, isFirstStep: boolean, isLastStep: boolean, back: () => void, next: () => void, amenities: any[], projectId: string, menus: any[], children: ReactNode
}) {

    const router = useRouter();
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    const reset = useAreaBreakdownStore(state => state.reset);

    const isLoading = useAppStore(state => state.isLoading);
    const setIsLoading = useAppStore(state => state.setIsLoading);

    const [error, setError] = useState<string | null>(null);
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

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isLastStep) {
            toast.success(`${stepMap.get(currentStepIndex)} saved!`); // Displays a success message
            return next();
        }

        setIsLoading(true);
        setError(null); // Clear previous errors when a new request starts
        try {
            let form_data = { ...areaBreakdown, ...{ projectId: projectId } };

            const response = await fetch('/api/project/definition', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form_data),
            });

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/project-definition/${projectResponse.id}`);
                setIsLoading(false) // Set loading to false when the request completes
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            reset();
        }
    }

    return (
        <>
            <div className="lg:col-start-1 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full">
                    <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                        <Link href="estimation-blue.html" className="js-prevbtn focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                    <div className="p-30 lg:pt-col2">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h1 className="font-latobold text-white">
                                    02.{currentStepIndex + 1}:
                                </h1>
                                <h4 className="font-latolight mt-3 text-white">
                                    Area breakdown
                                </h4>
                                <div className="estimation-col__bar mt-6 mb-6"></div>
                                {menus.length && <div className="estimation-col__content">
                                    {menus.map((menu: any, index: number) => (
                                        <div key={menu._id} className={clsx(
                                            'js-step-indicator step-indicator',
                                            {
                                                'active': index === currentStepIndex,
                                            },
                                        )}>
                                            <span className="font-latoblack">02.{index + 1}:</span> <br />
                                            {menu.title}
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form id="projectForm" onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">
                {!isFirstStep && (
                    <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                        <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                )}
                <Wrapper stepIndex={currentStepIndex} >
                    {children}
                </Wrapper>
            </form>
        </>
    );
}