import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/requirements/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Requirement', href: '/setting/requirements' },
                    {
                        label: 'Create Requirement',
                        href: '/setting/requirements/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}