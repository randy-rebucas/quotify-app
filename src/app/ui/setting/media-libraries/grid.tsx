import Image from "next/image";
import Link from "next/link";
import { Delete } from "./buttons";

export default function Grid({ medias }: { medias: any[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {medias.map((media: any, index: number) => {
                return (
                    <Link key={media._id} href={`/setting/media-libraries/${media._id}`}>
                        <div key={index}>
                            <Image
                                src={`/uploads/${media.fileName}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-cover object-center max-w-full rounded-lg w-full h-auto"
                                alt="gallery-photo"
                            />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}