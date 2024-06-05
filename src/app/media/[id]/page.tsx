import { fetchMediaLibraryById } from "@/app/lib/data";
import Image from "next/image";

export default async function MediaPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    return (
        <>
            <input type="text" defaultValue={media._id} className="border text-xs w-full" autoFocus/>
            <div className='drop-shadow-xl rounded'>
                <Image
                    src={`/uploads/${media.fileName}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg border hover:border-indigo-600"
                    alt={media.alternativeText}
                />
            </div>
        </>
    )
}