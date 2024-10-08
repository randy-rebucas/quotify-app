'use client';


import { FormEvent, useEffect, useState } from "react";

import { PieChartPresentation } from "../pie-chart-presentation";

import PieChartData from "../pie-chart-data";
import { useRouter } from "next/navigation";
import Tooltip from "@/components/tooltip";
import { useAppStore } from "@/lib/store/appStore";
import { common } from "@/lib/mock";
import Link from "next/link";
import { useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";
import { IProject } from "@/models/Project";

// import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Form({ project, selectedAmenities, selectedCustomSpaces }: {
    project: any;
    selectedAmenities: any[],
    selectedCustomSpaces: any[]
}) {

    const router = useRouter();
    const [workspaceAssigned, setWorkspanceAssigned] = useState<number>(0);
    const [staffWorkingRemotely, setStaffWorkingRemotely] = useState<number>(0);
    const [breakdowns, setBreakdowns] = useState<any[]>([]);
    const [totalBreakdowns, setTotalBreakdowns] = useState<number>(0);
    const isLoading = useAppStore(state => state.isLoading);
    const setIsLoading = useAppStore(state => state.setIsLoading);
    const updateFields = useAreaBreakdownStore(state => state.updateFields)

    async function onSubmit(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        const response = await fetch('/api/project/information', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectId: project._id }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit the data. Please try again.')
        }

        let projectResponse = await response.json();

        if (response.status === 200) {
            router.push(`/estimation/requirement/${projectResponse.id}`);
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    useEffect(() => {
        const seatingPercentage = +project.seatingPercentage;
        setWorkspanceAssigned(seatingPercentage);
        setStaffWorkingRemotely(100 - seatingPercentage);
    }, [project])

    useEffect(() => {
        const breakdownGroup = [...selectedAmenities, ...selectedCustomSpaces];
        setTotalBreakdowns(breakdownGroup.length);
        const groupItemRestById = (collector: any, item: any) => {
            const { categoryName, ...rest } = item;
            const groupList = collector[categoryName] || (collector[categoryName] = []);

            groupList.push(rest);

            return collector;
        }
        setBreakdowns(Object.entries(breakdownGroup.reduce(groupItemRestById, {})));

    }, [selectedAmenities, selectedCustomSpaces])

    useEffect(() => {
        const getProjectAmenities = async (id?: string) => {
            if (id) {
                const response = await fetch(
                    `/api/project/amenities/by-project/${id}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );

                let projectAmenitiesResponse = await response.json();
                updateFields({ selectedAmenityIds: projectAmenitiesResponse.map((projectAmenity: any) => projectAmenity._id) });
            }
        };

        getProjectAmenities(project._id);

    }, [project, updateFields]);

    return (
        <form onSubmit={onSubmit} className="col-span-4 row-span-2 h-full w-full overflow-y-scroll overflow-x-hidden">
            <div className="grid grid-cols-4 h-full ">
                <div className="col-span-3 flex flex-col justify-start items-start w-full h-full">
                    <Tooltip />

                    <div className="h-full w-full">
                        <div className="p-30 pt-[6.852vh]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="hide-on-print">
                                    <div className="h-1 w-20 bg-black"></div>

                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        review:  <span className="font-latothin">project definition</span>
                                    </h5>
                                </div>

                                <div className="grid grid-cols-3 bg-[#F2F2F2] mt-[6.019vh] p-[40px] estimates-grid ">
                                    <div className="col-span-2">
                                        <div className="h-[1px] w-20 bg-black"></div>

                                        <h5 className="font-latobold mt-1 xl:text-5xl md:text-4xl text-3xl text-black hide-on-print">
                                            Project <br />Information
                                        </h5>
                                        <h5 className="font-light my-2 show-on-print">
                                            Project Information
                                        </h5>
                                        <p className="text-[12px] text-blue font-latolight hide-on-print">prepared by {common.company} using {common.appName}. <br />{common.currentDate}</p>
                                        <p className="show-on-print">Prepared by {common.company} using {common.appName}. <br />Date: {common.currentDate}</p>
                                    </div>
                                    <div className="col-span-1 row-span-2">
                                        <h3 className="text-[18px] text-black hide-on-print">area distribution</h3>
                                        <h3 className="font-light show-on-print">Area Distribution</h3>

                                        <div id="pie" className="flex gap-2 w-full">
                                            <PieChartPresentation width={280} height={280} breakdowns={breakdowns} totalBreakdowns={totalBreakdowns} />
                                        </div>

                                        <PieChartData breakdowns={breakdowns} totalBreakdowns={totalBreakdowns} selectedAmenities={selectedAmenities} selectedCustomSpaces={selectedCustomSpaces} />

                                    </div>
                                    <div className="col-span-1 flex flex-col justify-end h-full">
                                        {/* <GoogleMapsEmbed 
                                                apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string} 
                                                height={200}
                                                width="100%;"
                                                mode="place"
                                                q="Brooklyn+Bridge,New+York,NY" 
                                            /> */}
                                        <iframe src={`https://maps.google.com/maps?q=${project.address}&z=13&ie=UTF8&iwloc=&output=embed`} loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade" className="w-[228px] h-[152px]" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false"
                                            tabIndex={0}></iframe>
                                        <div className="mt-[15px] max-w-[150px] text-black font-latolight">
                                            {/* <strong className="font-latobold">Mmoser - Vancouver office</strong> */}
                                            <strong className="font-latobold">Address</strong>
                                            <p>{project.address}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex flex-col justify-end h-full">
                                        <div className="text-black mt-2">
                                            <ul>
                                                <li className="font-latolight pb-2 mb-3">
                                                    <div className="flex pb-1">
                                                        <div className="text-[14px]">space size</div>
                                                    </div>
                                                    <div className="font-latobold text-[24px]">{Number(project.spaceSize).toLocaleString()} sqft</div>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    <div className="flex pb-1">
                                                        <div className="text-[14px]">rentable area</div>
                                                    </div>
                                                    <div className="font-latobold text-[24px]">{Number(project.rentableArea).toLocaleString()} sqft</div>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    <div className="flex pb-1">
                                                        <div className="text-[14px]">target headcount</div>
                                                    </div>
                                                    <div className="font-latobold text-[24px]">{project.headCount}</div>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    <div className="flex pb-1">
                                                        <div className="text-[14px]">workspace assigned</div>
                                                    </div>
                                                    <div className="font-latobold text-[24px]">{project.workspaceAssigned}%</div>
                                                </li>
                                                <li className="font-latolight pb-2 mb-3">
                                                    <div className="flex pb-1">
                                                        <div className="text-[14px]">staff working remotely</div>
                                                    </div>
                                                    <div className="font-latobold text-[24px]">{project.staffWorkRemotely}%</div>
                                                </li>
                                            </ul>
                                            <div className="h-[1px] w-[101px] bg-black mb-[10px]"></div>
                                            <div className="font-latobold text-[24px]">12 sqft / people</div>
                                            <small className="font-latolight text-[14px] text-blue">industry standard is 15 sqft / people</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-30 w-full flex flex-col items-start justify-between h-full hide-on-print">
                    <Actions project={project} />
                    <button className="js-nextbtn focus:shadow-outline focus:outline-none w-full flex justify-end" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                            fill="none">
                            <path
                                d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                                fill="#005A92" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}

export function Actions({ project }: { project: IProject }) {
    return (
        <div className="pt-[180px]">
            <Link href={`/print/project-definition/${project._id}`} target="_blank" className="text-[24px] font-latobold flex items-center mb-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#809BA9" />
                    <rect y="17" width="16" height="2" fill="#809BA9" />
                </svg>
                <div className="text-blue ml-3 text-opacity-50 hover:text-opacity-100">download</div>
            </Link>
            <Link href={`/share/${project._id}/0/0`} className="text-[24px] font-latobold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="#809BA9" />
                </svg>
                <div className="text-blue ml-3 text-opacity-50 hover:text-opacity-100">share</div>
            </Link>
        </div>
    )
}