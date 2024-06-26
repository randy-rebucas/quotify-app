import { fetchRequirements } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/requirement-levels/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function Page() {

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