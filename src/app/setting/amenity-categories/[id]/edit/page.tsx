
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityCategoryById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/amenity-categories/edit-form';

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