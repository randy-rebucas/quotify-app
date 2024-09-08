
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRequirementlevelById, fetchRequirements } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/requirement-levels/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function RequirementLevelsEditPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const requirement = await fetchRequirementlevelById(id);
    const requirements = await fetchRequirements();

    if (!requirement) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Requirement Levels', href: '/setting/requirement-levels' },
                    {
                        label: 'Edit Requirements',
                        href: `/setting/requirement-levels/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form requirement={requirement} requirements={requirements}/>
        </main>
    );
}