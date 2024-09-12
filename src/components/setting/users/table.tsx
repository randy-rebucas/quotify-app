import { IUser } from "@/models/User";
import { DeleteUser, UpdateUser } from "./buttons";
import { getSession } from "@/actions/session";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function Table({ users }: { users: IUser[] }) {
    const session = await getSession();

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Location</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {users.map((user: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="whitespace-nowrap px-3 py-1">{user.email}</td>
                                        <td className="whitespace-nowrap px-3 py-1">{user.office.location}</td>
                                        <td className="whitespace-nowrap py-1 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                {session?.userId !== user._id.toString() && <>
                                                    <UpdateUser id={user._id.toString()} />
                                                    <DeleteUser id={user._id.toString()} />
                                                </>
                                                }
                                                {session?.userId === user._id.toString() && <Link
                                                    href='#'
                                                    className="rounded-md border p-2 hover:bg-gray-100"
                                                >
                                                    <UserCircleIcon className="w-5" />
                                                </Link>}
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