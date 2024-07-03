
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRequirementlevelById, fetchRequirements, fetchRequirementsByGroup } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/requirement-levels/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const requirement = await fetchRequirementlevelById(id);
    const requirements = await fetchRequirements();
    const requirements_groups = await fetchRequirementsByGroup();
    
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
            <Form requirement={requirement} requirements={requirements} requirements_groups={requirements_groups}/>
        </main>
    );
}