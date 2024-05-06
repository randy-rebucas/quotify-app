import Form from '@/app/ui/setting/amenities/edit-form';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAmenityById } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Amenity Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const amenity = await fetchAmenityById(id);

    if (!amenity) {
        notFound();
    }
    return (
        <main>
            <Form amenity={amenity} />
        </main>
    );
}