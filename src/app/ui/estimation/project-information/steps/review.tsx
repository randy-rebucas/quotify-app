import { useRouter } from "next/navigation";
import { useState } from "react";
import { financial } from "@/app/ui/setting/projects/table";
import { useProjectInformationStore } from "@/app/lib/store/projectInformationStore";

export default function Review() {
    const router = useRouter();
    const project = useProjectInformationStore(state => state.projectInformation);

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    // update this to action and implement dispatch
    async function handleClick() {
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
        try {
            const formData = new FormData();
            formData.append('spaceName', project.spaceName);
            formData.append('address', project.address.place);
            formData.append('approximateSize', project.approximateSize);
            formData.append('rentableArea', project.rentableArea);
            formData.append('targetHeadCount', project.targetHeadCount);
            formData.append('averageAttendance', project.averageAttendance);
            formData.append('assignedSeat', project.assignedSeat);
            formData.append('hasFloorPlan', project.hasFloorPlan ? 'true' : 'false');
            formData.append('hasAddress', project.hasAddress ? 'true' : 'false');
            formData.append('isBaseOnHeadCount', project.isBaseOnHeadCount ? 'true' : 'false');

            for (let index = 0; index < project.floorPlans.length; index++) {
                const element = project.floorPlans[index];
                formData.append(element.name, element);
            }

            const response = await fetch('/api/projects', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/area-breakdown/${projectResponse.id}`)
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    console.log(project)
    return (
        <>
            <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full w-full">
                    <div className="px-30 pt-[6.852vh]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="h-1 w-20 bg-black"></div>
                                <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                    let’s review
                                </h5>

                                <div className="mt-[9.259vh] w-full">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Space name:
                                                </th>
                                                <td className="font-latolight">
                                                    {project.spaceName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Floorplan:
                                                </th>
                                                <td className="font-latolight">
                                                    {project.floorPlans && project.floorPlans.map((file: any, idx: any) => (
                                                        file.name
                                                    ))}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Address:
                                                </th>
                                                <td className="font-latolight">
                                                    {project.address.place}
                                                    {/* <iframe className="w-[228px] h-[152px]"
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        src={`https://www.google.com/maps/embed/v1/${process.env.NEXT_PUBLIC_MAPS_MODE}?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
                                            &q=${project.address.place}`}
                                                        style={{ border: 0 }} allowFullScreen={true} aria-hidden="false"
                                                        tabIndex={0}>
                                                    </iframe> */}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Approximate size of new space:
                                                </th>
                                                <td className="font-latolight">
                                                    {financial(project.approximateSize)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Rentable area square footage:
                                                </th>
                                                <td className="font-latolight">
                                                {financial(project.rentableArea)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Target headcount:
                                                </th>
                                                <td className="font-latolight">
                                                    {project.targetHeadCount}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold pr-5 text-right w-[286px] py-2">
                                                    Average attendance per week:
                                                </th>
                                                <td className="font-latolight">
                                                    {project.averageAttendance}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
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
        </>
    )
}
