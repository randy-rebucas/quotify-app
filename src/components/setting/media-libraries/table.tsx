
import Image from "next/image";
import { Delete, Update } from "./buttons";
import { IMedia } from "@/models/Media";
import Link from "next/link";
import { filesize } from "filesize";

export default function Table({ medias }: { medias: IMedia[] }) {

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-neutral-70">
                            <thead className="bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Image</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Uploaded By</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Type</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Size</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {medias.map((media: any, index: number) => (
                                    <tr key={index}
                                        className="w-full border-b py-1 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">
                                            <Link key={media._id} href={`/media/${media._id}`}>
                                                <Image
                                                    src={media.fileName}
                                                    width={50}
                                                    height={50}
                                                    alt={media.level}
                                                /></Link>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{media.uploadedBy.name}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{media.fileName}</td>
                                        <td className="whitespace-nowrap px-3 py-1 align-middle">{media.fileType}</td>
                                        <td className="px-3 py-1 align-middle">{filesize(media.fileSize, { standard: "jedec" })}</td>
                                        <td className="whitespace-nowrap py-1 pl-6 pr-3 align-middle">
                                            <div className="flex justify-end gap-3">
                                                <Update id={media._id.toString()} />
                                                <Delete id={media._id.toString()} />
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