import { IProject } from "@/models/Project";
import { DeleteProject } from "./buttons";

export const financial = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}

export default function Table({ projects }: { projects: any[] }) {

    if (projects.length === 0) {
        return (
            <div className="max-w-xs py-16 mx-auto text-center">
                <div className="flex items-center justify-center mx-auto mb-6 w-16 h-16 border rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 7C7.25 7.41421 7.58579 7.75 8 7.75C8.41421 7.75 8.75 7.41421 8.75 7H7.25ZM8.75 3C8.75 2.58579 8.41421 2.25 8 2.25C7.58579 2.25 7.25 2.58579 7.25 3H8.75ZM15.25 7C15.25 7.41421 15.5858 7.75 16 7.75C16.4142 7.75 16.75 7.41421 16.75 7H15.25ZM16.75 3C16.75 2.58579 16.4142 2.25 16 2.25C15.5858 2.25 15.25 2.58579 15.25 3H16.75ZM7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75V10.25ZM17 11.75C17.4142 11.75 17.75 11.4142 17.75 11C17.75 10.5858 17.4142 10.25 17 10.25V11.75ZM5 5.75H19V4.25H5V5.75ZM20.25 7V19H21.75V7H20.25ZM19 20.25H5V21.75H19V20.25ZM3.75 19V7H2.25V19H3.75ZM5 20.25C4.30964 20.25 3.75 19.6904 3.75 19H2.25C2.25 20.5188 3.48122 21.75 5 21.75V20.25ZM20.25 19C20.25 19.6904 19.6904 20.25 19 20.25V21.75C20.5188 21.75 21.75 20.5188 21.75 19H20.25ZM19 5.75C19.6904 5.75 20.25 6.30964 20.25 7H21.75C21.75 5.48122 20.5188 4.25 19 4.25V5.75ZM5 4.25C3.48122 4.25 2.25 5.48122 2.25 7H3.75C3.75 6.30964 4.30964 5.75 5 5.75V4.25ZM8.75 7V3H7.25V7H8.75ZM16.75 7V3H15.25V7H16.75ZM7 11.75H17V10.25H7V11.75Z" fill="#495460"></path>
                    </svg>
                </div>
                <p className="mb-6">No projects submited yet. </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50">
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
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800">{project.spaceName}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800">{project.floorPlan}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 text-right">{financial(project.spaceSize.toString())}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 text-right">{financial(project.rentableArea.toString())}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{project.headCount.toString()}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{project.averageOfficeAttendance.toString()}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{project.seatingPercentage.toString()}</td>
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