import Form from '@/components/setting/media-libraries/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchMediaLibraryById } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';


export const metadata: Metadata = {
    title: 'Media Edit',
};
export default async function MediaLibraryPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    if (!media) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Media Libraries', href: '/setting/media-libraries' },
                    {
                        label: 'Edit Media',
                        href: `/setting/media-libraries/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form media={media}/>
        </main>
    );
}