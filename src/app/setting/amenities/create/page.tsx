import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/amenities/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Amenity Create',
};
export default async function Page() {

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
            <Form  />
        </main>
    );
}