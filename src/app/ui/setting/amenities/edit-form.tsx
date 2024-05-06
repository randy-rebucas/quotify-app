'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';
import { Button } from '../../button';
import { updateAmenity } from '@/app/actions/amenity';

export default function EditUserForm({
  amenity,
}: {
  amenity: any;
}) {

  const updateAmenityWithId = updateAmenity.bind(null, amenity.id);
  const [state, dispatch] = useFormState(updateAmenityWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="amenity_name" className="mb-2 block text-sm font-medium">
            Amenity Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amenity_name"
                name="amenity_name"
                type="text"
                defaultValue={amenity.amenity_name}
                placeholder="Enter amenity name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/amenities"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Amenity</Button>
      </div>
    </form>
  );
}
