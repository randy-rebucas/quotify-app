import Form from '@/components/setting/offices/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchOfficeById } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';


export const metadata: Metadata = {
    title: 'Office Edit',
};
export default async function OfficesEditPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const office = await fetchOfficeById(id);

    if (!office) {
        notFound();
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Offices', href: '/setting/offices' },
                    {
                        label: 'Edit Office',
                        href: `/setting/offices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form office={office} />
        </main>
    );
}