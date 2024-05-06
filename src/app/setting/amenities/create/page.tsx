import Form from '@/app/ui/setting/amenities/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Amenity Create',
};
export default async function Page() {

    return (
        <main>
            <Form  />
        </main>
    );
}