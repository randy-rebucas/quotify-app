import { fetchAmenities } from '@/app/lib/data';
import { CreateAmenity } from '@/app/ui/setting/amenities/buttons';
import Table from '@/app/ui/setting/amenities/table';
import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Amenities',
};

export default async function Page() {
    const amenities = await fetchAmenities();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Amenities' />
                <CreateAmenity />
                
            </div>
            <Table amenities={amenities} />
        </div>
    )
}