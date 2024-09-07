import { fetchAmenityCategories } from '@/app/lib/data';
import { CreateAmenityCategory } from '@/components/setting/amenity-categories/buttons';
import Table from '@/components/setting/amenity-categories/table';
import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Amenity Categories',
};

export default async function Page() {
    const categories = await fetchAmenityCategories();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Amenity Categories' />
                <CreateAmenityCategory />

            </div>
            <Table categories={categories} />
        </div>
    )
}