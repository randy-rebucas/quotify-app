
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRequirementById, fetchRequirements } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/requirements/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const requirement = await fetchRequirementById(id);
    const requirements = await fetchRequirements();
    
    if (!requirement) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Requirements', href: '/setting/requirements' },
                    {
                        label: 'Edit Requirement',
                        href: `/setting/requirements/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form requirement={requirement} requirements={requirements}/>
        </main>
    );
}