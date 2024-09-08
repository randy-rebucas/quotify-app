import Form from '@/components/setting/media-libraries/edit-form';
import { notFound } from 'next/navigation';
import { fetchMediaLibraryById } from '@/lib/data';


export default async function MediaLibrariesEditPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    if (!media) {
        notFound();
    }
    return <Form media={media} />;
}