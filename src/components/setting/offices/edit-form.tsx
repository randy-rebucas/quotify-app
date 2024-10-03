'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';

import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { updateOffice } from '@/actions/office';
import { Button } from '@/components/button';

export default function EditOfficeForm({
  office,
}: {
  office: any;
}) {

  const updateOfficeWithId = updateOffice.bind(null, office._id);
  const [state, dispatch] = useFormState(updateOfficeWithId, undefined);

  let statusMapping = new Map<number, string>();
  statusMapping.set(1, "1");
  statusMapping.set(2, "2");

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="location" className="mb-2 block text-sm font-medium">
            Location

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue={office.location}
                  placeholder="Enter location"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.location && <div>{state.errors.location}</div>}
              </div>
            </div>
          </label>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="active"
                  name="status"
                  type="radio"
                  value="1"
                  defaultChecked={statusMapping.get(office.status) === "1"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Active <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="status"
                  type="radio"
                  value="2"
                  defaultChecked={statusMapping.get(office.status) === "2"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Inactive <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/offices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
          Cancel
        </Link>
        <Button type="submit">Edit Amenity</Button>
      </div>
    </form>
  );
}
