import Image from "next/image";
import { Delete, Update } from "./buttons";
import { IMedia } from "@/models/Media";
import Link from "next/link";
import { filesize } from "filesize";

export default function Grid({ medias }: { medias: IMedia[] }) {
    return (
        <div className="gap-4 grid grid-cols-4">
            {medias.map((media: any, index: number) => (
                <div key={index} className="relative" >
                    <Link key={media._id} href={`/media/${media._id}`}>
                        <Image
                            src={media.fileName}
                            width={150}
                            height={150}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt={media.level}
                        />
                    </Link>
                    <div className="media-details">
                        <h4 className="font-lato text-[14px]">{media.fileName}</h4>
                        <p className="font-lato text-[14px]">{media.fileType} <span>{filesize(media.fileSize, { standard: "jedec" })}</span></p>
                        <p className="font-lato text-[14px]">uploaded by: {media.uploadedBy.name}</p>
                    </div>
                    <div className="absolute action flex gap-3 justify-end right-5 top-[14px] z-10">
                        <Update id={media._id.toString()} />
                        <Delete id={media._id.toString()} />
                    </div>
                </div>
            ))}
        </div>
    )
}