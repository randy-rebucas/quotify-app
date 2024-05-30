import { fetchAmenityCategories } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/amenities/create-form';
import { Metadata } from 'next';

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