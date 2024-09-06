'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { createCustomSpace } from '@/app/actions/customSpace';
import { ICustomSpace } from '@/models/CustomSpace';


export default function Form({ custom_spaces }: { custom_spaces: any[] }) {

  const [state, dispatch] = useFormState(createCustomSpace, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* custom space name */}
        <div className="mb-4">
          <label htmlFor="custom_space_name" className="mb-2 block text-sm font-medium">
            Custom Space Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="custom_space_name"
                name="custom_space_name"
                type="text"
                placeholder="Enter Custom Space Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

        {/* Custom Space Group Name */}
        <div className="mb-4">
          <label htmlFor="custom_space_group_name" className="mb-2 block text-sm font-medium">
            Custom Space Group
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select name="custom_space_group_name" id="custom_space_group_name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500">
                <option value='' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">Select</option>
                {custom_spaces.map((custom_space: ICustomSpace, index: number) => (
                  <option key={index} value={custom_space.customSpaceName} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{custom_space.customSpaceName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Capacity */}
        <div className="mb-4">
          <label htmlFor="capacity" className="mb-2 block text-sm font-medium">
            Capacity
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="capacity"
                name="capacity"
                type="text"
                placeholder="Enter capacity"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/custom-spaces"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Amenity</Button>
      </div>
    </form>
  );
}
