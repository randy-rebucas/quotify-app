import { fetchUsers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { CreateUser } from '@/components/setting/users/buttons';
import Table from '@/components/setting/users/table';
import Title from '@/app/ui/title';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Users',
};

export default async function Page() {
    const users = await fetchUsers();

    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Title title='Users' />
                <CreateUser />
            </div>
            <Table users={users} />
        </div>
    )
}                                                          