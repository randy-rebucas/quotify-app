import Form from '@/app/ui/setting/users/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Create',
};
export default async function Page() {

    return (
        <main>
            <Form  />
        </main>
    );
}