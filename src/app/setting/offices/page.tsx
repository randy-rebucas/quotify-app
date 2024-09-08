
import { CreateOffice } from '@/components/setting/offices/buttons';
import Table from '@/components/setting/offices/table';
import Title from '@/components/setting/title';
import { fetchOffices } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Offices',
};

export default async function OfficesPage() {
    const offices = await fetchOffices();

    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Title title='Offices' />
                <CreateOffice />
            </div>
            <Table offices={offices} />
        </div>
    )
}                                                          