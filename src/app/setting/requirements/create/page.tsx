import { fetchRequirements } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/requirements/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function RequirementsCreatePage() {

    const requirements = await fetchRequirements();
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Requirement', href: '/setting/requirements' },
                    {
                        label: 'Create Requirement',
                        href: '/setting/requirements/create',
                        active: true,
                    },
                ]}
            />
            
            <Form requirements={requirements} />
        </main>
    );
}