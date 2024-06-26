import Form from '@/app/ui/setting/custom-space/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchCustomSpaceById, fetchCustomSpaces } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';


export const metadata: Metadata = {
    title: 'Custom Space Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const custom_space = await fetchCustomSpaceById(id);
    const custom_spaces = await fetchCustomSpaces();

    if (!custom_space) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Custom Spaces', href: '/setting/custom-spaces' },
                    {
                        label: 'Edit Custom Spaces',
                        href: `/setting/custom-spaces/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form custom_space={custom_space} custom_spaces={custom_spaces}/>
        </main>
    );
}