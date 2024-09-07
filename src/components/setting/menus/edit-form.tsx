'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';

import { updateMenu } from '@/actions/menu';
import { Button } from '@/components/button';

export default function EditUserForm({
  menu,
}: {
  menu: any;
}) {

  const updateMenuWithId = updateMenu.bind(null, menu._id);
  const [state, dispatch] = useFormState(updateMenuWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={menu.title}
                placeholder="Enter Title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="page_handled" className="mb-2 block text-sm font-medium">
            Page Handle
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="page_handled"
                name="page_handled"
                type="text"
                defaultValue={menu.pageHandled}
                placeholder="Enter page handle"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/menus"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Menu</Button>
      </div>
    </form>
  );
}
