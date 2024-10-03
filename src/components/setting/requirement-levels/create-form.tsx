'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { useFormState } from 'react-dom';
import { createRequirementLevel } from '@/actions/requirementLevel';


export default function Form({ requirements }: { requirements: any[] }) {

  const [state, dispatch] = useFormState(createRequirementLevel, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="level" className="mb-2 block text-sm font-medium">
            Label

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="level"
                  name="level"
                  type="text"
                  placeholder="Enter level"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.level && <div>{state.errors.level}</div>}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="unitRate" className="mb-2 block text-sm font-medium">
            Unit Rate

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="unitRate"
                  name="unitRate"
                  type="number"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.unitRate && <div>{state.errors.unitRate}</div>}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <textarea id="description" name="description" className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"></textarea>
                {state?.errors?.description && <div>{state.errors.description}</div>}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Image Filename

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Paste image media id"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.image && <div>{state.errors.image}</div>}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="requirementId" className="mb-2 block text-sm font-medium">
            Choose Requirement

            <div className="relative">
              <select
                id="requirementId"
                name="requirementId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a requirement
                </option>
                {requirements.map((requirement) => (
                  <option key={requirement._id} value={requirement._id}>
                    {requirement.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/refinement-levels"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
