import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/menus/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Menu Create',
};
export default async function MenusCreatePage() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Menu', href: '/setting/menus' },
                    {
                        label: 'Create Menu',
                        href: '/setting/menus/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}