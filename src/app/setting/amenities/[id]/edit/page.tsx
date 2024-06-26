import Form from '@/app/ui/setting/amenities/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityById, fetchAmenityCategories } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';


export const metadata: Metadata = {
    title: 'Amenity Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const amenity = await fetchAmenityById(id);
    const categories = await fetchAmenityCategories();
    
    if (!amenity) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Amenities', href: '/setting/amenities' },
                    {
                        label: 'Edit Amenity',
                        href: `/setting/amenities/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form amenity={amenity} categories={categories} />
        </main>
    );
}