import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/setting/media-libraries/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create',
};
export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Media Libraries', href: '/setting/media-libraries' },
                    {
                        label: 'Upload Media',
                        href: '/setting/media-libraries/create',
                        active: true,
                    },
                ]}
            />
            <Form  />
        </main>
    );
}