import Form from '@/components/setting/menus/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchMenuById } from '@/app/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';


export const metadata: Metadata = {
    title: 'Menu Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const menu = await fetchMenuById(id);

    if (!menu) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Menus', href: '/setting/menus' },
                    {
                        label: 'Edit Menu',
                        href: `/setting/menus/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form menu={menu} />
        </main>
    );
}