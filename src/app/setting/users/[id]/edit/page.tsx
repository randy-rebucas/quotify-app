import Form from '@/components/setting/users/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchOffices, fetchUserById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';

export const metadata: Metadata = {
    title: 'User Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const user = await fetchUserById(id);
    const offices = await fetchOffices();

    if (!user) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/setting/users' },
                    {
                        label: 'Edit User',
                        href: `/setting/users/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form user={user} offices={offices}/>
        </main>
    );
}