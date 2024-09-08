
import { CreateUser } from '@/components/setting/users/buttons';
import { Metadata } from 'next';
import { fetchUsers } from '@/lib/data';
import Table from '@/components/setting/users/table';
import Title from '@/components/setting/title';

export const metadata: Metadata = {
    title: 'Users',
};

export default async function UsersPage() {
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