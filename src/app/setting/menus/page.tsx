import { fetchMenus } from '@/app/lib/data';
import { CreateMenu } from '@/app/ui/setting/menus/buttons';
import Table from '@/app/ui/setting/menus/table';

import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Menus',
};

export default async function Page() {
    const menus = await fetchMenus();

    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Menus' />
                <CreateMenu /> 
            </div>
            <Table menus={menus} />
        </div>
    )
}