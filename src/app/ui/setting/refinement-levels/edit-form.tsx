'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';
import { Button } from '../../button';
import { updateRefinementLevel } from '@/app/actions/refinementLevel';

export default function EditAmenityCategoryForm({
  refinement,
  refinements
}: {
  refinement: any;
  refinements: any[] 
}) {

  const updateRefinementLevelWithId = updateRefinementLevel.bind(null, refinement._id);
  const [state, dispatch] = useFormState(updateRefinementLevelWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Level
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="level"
                name="level"
                type="text"
                defaultValue={refinement.level}
                placeholder="Enter level"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {state?.errors?.level && <div>{state.errors.level}</div>}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Unit Rate
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="unitRate"
                name="unitRate"
                type="number"
                defaultValue={refinement.unitRate}
                placeholder="Enter unit rate"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {state?.errors?.unitRate && <div>{state.errors.unitRate}</div>}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea id="description" name="description" defaultValue={refinement.description} className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500">
              </textarea>
              {state?.errors?.description && <div>{state.errors.description}</div>}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Choose refinement
          </label>
          <div className="relative">
            <select
              id="refinement"
              name="refinementId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={refinement.refinementId}
            >
              <option value="" disabled>
                Select a refinement
              </option>
              {refinements.map((refinement) => (
                <option key={refinement._id} value={refinement._id}>
                  {refinement.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/refinements"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
          Cancel
        </Link>
        <Button type="submit">Edit</Button>
      </div>
    </form>
  );
}
