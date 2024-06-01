
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRefinementById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/refinements/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const refinement = await fetchRefinementById(id);

    if (!refinement) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Refinements', href: '/setting/refinements' },
                    {
                        label: 'Edit Refinement',
                        href: `/setting/refinements/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form refinement={refinement} />
        </main>
    );
}