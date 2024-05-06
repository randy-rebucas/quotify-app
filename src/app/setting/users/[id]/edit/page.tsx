import Form from '@/app/ui/setting/users/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchUserById } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'User Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const user = await fetchUserById(id);

    if (!user) {
        notFound();
    }
    return (
        <main>
            <Form user={user} />
        </main>
    );
}