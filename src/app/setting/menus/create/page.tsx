import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/components/setting/menus/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Menu Create',
};
export default async function Page() {

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