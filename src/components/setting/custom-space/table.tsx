import { ICustomSpace } from "@/models/CustomSpace";
import { DeleteCustomSpace, UpdateCustomSpace } from "./buttons";

export default function Table({ customSpaces }: { customSpaces: any[] }) {

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Custom Space Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Custom Space Group</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Capacity</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {customSpaces.map((customSpace: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 ">{customSpace.customSpaceName}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 ">{customSpace.customSpaceGroupName}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 ">{customSpace.capacity ? customSpace.capacity : '--'}</td>
                                        <td className="px-6 py-1 whitespace-nowrap text-end text-sm font-medium">
                                            <div className="flex justify-end gap-3">
                                                <UpdateCustomSpace id={customSpace._id} />
                                                <DeleteCustomSpace id={customSpace._id} />
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