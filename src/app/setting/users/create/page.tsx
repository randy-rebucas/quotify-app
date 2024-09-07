import { fetchOffices } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/components/setting/users/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Create',
};
export default async function Page() {
    
    const offices = await fetchOffices();

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
            <Form offices={offices}/>
        </main>
    );
}