import { Delete, Update } from "./buttons";
import { IRequirement } from "@/app/models/Requirement";


export default function Table({ requirements }: { requirements: IRequirement[] }) {

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Group</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Sort</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {requirements.map((requirement: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="whitespace-nowrap px-3 py-1">{requirement.name}</td>
                                        <td className="whitespace-nowrap px-3 py-1">{requirement.groupName}</td>
                                        <td className="whitespace-nowrap px-3 py-1">{requirement.sort}</td>
                                        <td className="whitespace-nowrap py-1 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                <Update id={requirement._id.toString()} />
                                                <Delete id={requirement._id.toString()} />
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