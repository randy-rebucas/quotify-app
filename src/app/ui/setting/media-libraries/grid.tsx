// import { DeleteMenu, UpdateMenu } from "./buttons";
import Image from "next/image";

export default function Grid({ medias }: { medias: any[] }) {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
            {medias.map((media: any, index: number) => (
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
            ))}
        </div>
    )
}