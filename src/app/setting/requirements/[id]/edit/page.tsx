
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchRequirementById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/requirements/edit-form';

export const metadata: Metadata = {
    title: 'Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const requirement = await fetchRequirementById(id);

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
            <Form requirement={requirement} />
        </main>
    );
}