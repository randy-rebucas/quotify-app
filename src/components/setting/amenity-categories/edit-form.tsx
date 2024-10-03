'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';
import { updateAmenityCategory } from '@/actions/amenityCategory';
import { Button } from '@/components/button';


export default function EditAmenityCategoryForm({
  category,
}: {
  category: any;
}) {

  const updateCategoryWithId = updateAmenityCategory.bind(null, category._id);
  const [state, dispatch] = useFormState(updateCategoryWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={category.name}
                  placeholder="Enter name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.name && <div>{state.errors.name}</div>}
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/amenity-categories"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
          Cancel
        </Link>
        <Button type="submit">Edit Category</Button>
      </div>
    </form>
  );
}
