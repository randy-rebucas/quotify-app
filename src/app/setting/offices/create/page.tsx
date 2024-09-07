import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/components/setting/offices/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Office Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Offices', href: '/setting/offices' },
                    {
                        label: 'Create Office',
                        href: '/setting/offices/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}