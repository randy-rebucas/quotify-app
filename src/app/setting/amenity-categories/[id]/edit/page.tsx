
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityCategoryById } from '@/lib/data';

import Form from '@/components/setting/amenity-categories/edit-form';
import Breadcrumbs from '@/components/breadcrumbs';

export const metadata: Metadata = {
    title: 'Amenity Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const category = await fetchAmenityCategoryById(id);

    if (!category) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Amenity Categories', href: '/setting/amenity-categories' },
                    {
                        label: 'Edit Category',
                        href: `/setting/amenity-categories/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form category={category} />
        </main>
    );
}