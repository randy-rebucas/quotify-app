
import Image from "next/image";
import { Delete, Update } from "./buttons";
import { IRequirementLevel } from "@/models/RequirementLevel";
import { fetchRequirementLevels } from "@/lib/data";

export default async function Table({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    
    const requirementLevels = await fetchRequirementLevels(query, currentPage);
    
    const financial = (x: string) => {
        return Number.parseFloat(x).toFixed(2);
    }

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Image</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Requirement</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Level</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Unit Rate</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Description</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {requirementLevels.map((requirementLevel: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">
                                            <Image
                                                src={`/uploads/${requirementLevel.image.fileName}`}
                                                width={50}
                                                height={50}
                                                alt={requirementLevel.level}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{requirementLevel.requirement.name}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{requirementLevel.level}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{financial(requirementLevel.unitRate.toString())}</td>
                                        <td className="px-3 py-1 align-middle">{requirementLevel.description}</td>
                                        <td className="whitespace-nowrap py-1 pl-6 pr-3 align-middle">
                                            <div className="flex justify-end gap-3">
                                                <Update id={requirementLevel._id.toString()} />
                                                <Delete id={requirementLevel._id.toString()} />
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