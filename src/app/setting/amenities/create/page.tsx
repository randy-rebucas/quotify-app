import { fetchAmenityCategories } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import { Metadata } from 'next';
import Form from '@/components/setting/amenities/create-form';

export const metadata: Metadata = {
    title: 'Amenity Create',
};
export default async function Page() {

    const categories = await fetchAmenityCategories();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Amenities', href: '/setting/amenities' },
                    {
                        label: 'Create Amenity',
                        href: '/setting/amenities/create',
                        active: true,
                    },
                ]}
            />
            <Form categories={categories} />
        </main>
    );
}