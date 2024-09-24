
import Image from "next/image";
import { Delete, Update } from "./buttons";
import { IRefinementLevel } from "@/models/RefinementLevel";
import { fetchRefinementLevels } from "@/lib/data";

export default async function Table({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    const refinementLevels = await fetchRefinementLevels(query, currentPage);

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
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Refinement</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Level</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Unit Rate</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Description</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {refinementLevels.map((refinementLevel: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">
                                            <Image
                                                src={refinementLevel.image.fileName}
                                                // sizes="100vw"
                                                // style={{
                                                //     width: '100%',
                                                //     height: 'auto',
                                                // }}
                                                width={50}
                                                height={50}
                                                alt={refinementLevel.level}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{refinementLevel.refinement.name}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{refinementLevel.level}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{financial(refinementLevel.unitRate.toString())}</td>
                                        <td className="px-3 py-1 align-middle">{refinementLevel.description}</td>
                                        <td className="whitespace-nowrap py-1 pl-6 pr-3 align-middle">
                                            <div className="flex justify-end gap-3">
                                                <Update id={refinementLevel._id.toString()} />
                                                <Delete id={refinementLevel._id.toString()} />
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