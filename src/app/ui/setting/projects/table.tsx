import { IProject } from "@/app/models/Project";
import { DeleteProject } from "./buttons";

export default function Table({ projects }: { projects: any[] }) {
    const financial = (x: string) => {
        return Number.parseFloat(x).toFixed(2);
    }

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Space Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Floor Plan</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 ">Space Size</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Rentable Area</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Head Count</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Average Office Attendance</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Setting Percentage</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {projects.map((project: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{project.spaceName}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{project.floorPlan}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-right">{financial(project.spaceSize.toString())}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-right">{financial(project.rentableArea.toString())}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center">{project.headCount.toString()}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center">{project.averageOfficeAttendance.toString()}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center">{project.seatingPercentage.toString()}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-end text-sm font-medium">
                                            <div className="flex justify-end gap-3">
                                                <DeleteProject id={project._id.toString()} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}