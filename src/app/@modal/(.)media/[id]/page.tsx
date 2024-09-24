import { fetchMediaLibraryById } from "@/lib/data";
import { Modal } from "./modal";
import Image from "next/image";

export default async function MediaModal({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    return (
        <Modal>
            <input type="text" defaultValue={media._id} className="border mb-2 p-2 text-xs w-full" autoFocus/>
            <div className='drop-shadow-xl rounded'>
                <Image
                    src={media.fileName}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg border hover:border-indigo-600"
                    alt={media.alternativeText}
                />
            </div>
        </Modal>
    )
}