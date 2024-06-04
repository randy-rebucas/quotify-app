import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchMediaLibraryById } from '@/app/lib/data';
import Image from "next/image";
import { Delete, Update } from '@/app/ui/setting/media-libraries/buttons';
import Actions from '@/app/ui/setting/media-libraries/actions';

export const metadata: Metadata = {
    title: 'Detail',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    if (!media) {
        notFound();
    }

    return (
        <>
            <div className='drop-shadow-xl ring-offset-2 ring-2 ring-blue-500/[.55] rounded'>
                <Image
                    src={`/uploads/${media.fileName}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg border hover:border-indigo-600"
                    alt={media.metaData.alternativeText}
                />
            </div>
            {/* <Actions media={media} /> */}
        </>
    );
}