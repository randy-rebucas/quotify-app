import { fetchRequirements } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/requirement-levels/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function RequirementLevelsCreatePage() {

    const requirements = await fetchRequirements();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Requirement Levels', href: '/setting/requirement-levels' },
                    {
                        label: 'Create Requirement Level',
                        href: '/setting/requirement-levels/create',
                        active: true,
                    },
                ]}
            />
            <Form requirements={requirements} />
        </main>
    );
}