// 'use server'

import { deleteUser } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// export function CreateInvoice() {
//   return (
//     <Link
//       href="/dashboard/invoices/create"
//       className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//     >
//       <span className="hidden md:block">Create Invoice</span>{' '}
//       <PlusIcon className="h-5 md:ml-4" />
//     </Link>
//   );
// }

export function UpdateUser({ id }: { id: string }) {
  return (
    <Link
      href={`/setting/users/${id}/edit`}
      className="mr-[15px] inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
    >
      Edit
    </Link>
  );
}

export async function DeleteUser({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);

  return (
    <form action={deleteUserWithId}>
      <button className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400">
        Delete
      </button>
    </form>
  );
}
