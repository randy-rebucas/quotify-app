
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRefinementlevelById, fetchRefinements } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/refinement-levels/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function RefinementLevelEditPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const refinement = await fetchRefinementlevelById(id);
    const refinements = await fetchRefinements();

    if (!refinement) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Refinement Levels', href: '/setting/refinement-levels' },
                    {
                        label: 'Edit Refinements',
                        href: `/setting/refinement-levels/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form refinement={refinement} refinements={refinements}/>
        </main>
    );
}