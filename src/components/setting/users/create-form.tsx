'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/actions/user';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';



export default function Form({ offices }: { offices: any[] }) {

  const [state, dispatch] = useFormState(createUser, undefined);
  const { pending } = useFormStatus()
  console.log(state?.errors)
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.email && <div className="flex gap-2">
                  <div>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-sm text-red-500">{state.errors.email}</p>
                </div>}
              </div>
            </div>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password

            <input
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              id="password" type="password" name="password" placeholder="password" />
            {state?.errors?.password && (
              <div>
                <p className='text-sm'>Password must:</p>
                <ul>
                  {state.errors.password.map((error: any) => (
                    <li key={error} className='flex gap-2 text-red/50 text-sm'><ExclamationCircleIcon className="h-5 w-5 text-red-500" /> {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="confirm_password" className="mb-2 block text-sm font-medium">
            Confirm Password

            <input
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              id="confirm-password" type="password" name="confirm_password" placeholder="confirm password" />
            {state?.errors?.confirm_password && <div className="flex gap-2">
              <div>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              </div>
              <p className="text-sm text-red-500">{state.errors.confirm_password}</p>
            </div>}
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="officeId" className="mb-2 block text-sm font-medium">
            Choose office

            <div className="relative">
              <select
                id="officeId"
                name="officeId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a office
                </option>
                {offices.map((office) => (
                  <option key={office._id} value={office._id}>
                    {office.location}
                  </option>
                ))}
              </select>
              {state?.errors?.officeId && <div className="flex gap-2">
                <div>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-sm text-red-500">{state.errors.officeId}</p>
              </div>}
            </div>
          </label>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" disabled={pending}>{pending ? 'Submiting' : 'Create User'}</Button>
      </div>
    </form>
  );
}
