import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/users/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/setting/users' },
                    {
                        label: 'Create User',
                        href: '/setting/users/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </main>
    );
}