import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/refinements/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Refinements', href: '/setting/refinements' },
                    {
                        label: 'Create Refinement',
                        href: '/setting/refinements/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}