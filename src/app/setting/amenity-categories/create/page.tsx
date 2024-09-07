import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/amenity-categories/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Category Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Amenity Category', href: '/setting/amenity-categories' },
                    {
                        label: 'Create Category',
                        href: '/setting/amenity-categories/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}