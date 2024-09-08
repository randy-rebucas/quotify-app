
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityById, fetchAmenityCategories } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/amenities/edit-form';


export const metadata: Metadata = {
    title: 'Amenity Edit',
};
export default async function AmenitiesEditPage({ params }: { params: { id: string } }) {
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