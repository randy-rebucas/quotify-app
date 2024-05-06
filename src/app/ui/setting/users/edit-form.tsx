'use client';

import Link from 'next/link';
import { updateUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Button } from '../../button';

export default function EditUserForm({
  user,
}: {
  user: any;
}) {

  const updateUserWithId = updateUser.bind(null, user.id);
  const [state, dispatch] = useFormState(updateUserWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
                placeholder="Enter email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit User</Button>
      </div>
    </form>
  );
}
