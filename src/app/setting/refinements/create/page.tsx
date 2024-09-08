
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/refinements/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function RefinementsCreatePage() {

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