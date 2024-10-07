import Form from '@/components/setting/custom-space/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityCategories, fetchCustomSpaceById, fetchCustomSpaces } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';


export const metadata: Metadata = {
    title: 'Custom Space Edit',
};
export default async function CustomspaceEditPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const custom_space = await fetchCustomSpaceById(id);
    const custom_spaces = await fetchCustomSpaces();
    const categories = await fetchAmenityCategories();

    if (!custom_space) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Custom Spaces', href: '/setting/custom-spaces' },
                    {
                        label: 'Edit Custom Spaces',
                        href: `/setting/custom-spaces/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form custom_space={custom_space} custom_spaces={custom_spaces} categories={categories} />
        </main>
    );
}