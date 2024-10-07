'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { useFormState } from 'react-dom';
import { ICustomSpace } from '@/models/CustomSpace';
import { createCustomSpace } from '@/actions/customSpace';

export default function Form({ custom_spaces, categories }: { custom_spaces: any[]; categories: any[] }) {

  const [state, dispatch] = useFormState(createCustomSpace, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* custom space name */}
        <div className="mb-4">
          <label htmlFor="custom_space_name" className="mb-2 block text-sm font-medium">
            Custom Space Name

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
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="categoryId" className="mb-2 block text-sm font-medium">
            Choose category
            <div className="relative">
              <select
                id="categoryId"
                name="categoryId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        {/* Custom Space Group Name */}
        <div className="mb-4">
          <label htmlFor="custom_space_group_name" className="mb-2 block text-sm font-medium">
            Custom Space Group
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
          </label>
        </div>
        {/* Capacity */}
        <div className="mb-4">
          <label htmlFor="capacity" className="mb-2 block text-sm font-medium">
            Capacity
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
          </label>
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
