import { fetchUsers } from '@/app/lib/data';
import Table from '@/app/ui/setting/users/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Users',
};

export default async function Page() {
    const users = await fetchUsers();
    
    return <Table users={users}/>;
}                                                          