import { fetchRefinements } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/refinement-levels/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function Page() {

    const refinements = await fetchRefinements();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Refinement Levels', href: '/setting/refinement-levels' },
                    {
                        label: 'Create Refinement Level',
                        href: '/setting/refinement-levels/create',
                        active: true,
                    },
                ]}
            />
            <Form refinements={refinements} />
        </main>
    );
}