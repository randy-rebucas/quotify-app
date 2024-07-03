'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { createRequirementLevel } from '@/app/actions/requirementLevel';

export default function Form({ requirements_groups }: { requirements_groups: any[] }) {

  const [state, dispatch] = useFormState(createRequirementLevel, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Amenity Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Label
          </label>
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
              <textarea id="description" name="description" className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"></textarea>
              {state?.errors?.description && <div>{state.errors.description}</div>}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Image Filename
          </label>
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
        </div>
        <div className="mb-4">
          <label htmlFor="requirementId" className="mb-2 block text-sm font-medium">
            Choose Requirement
          </label>
          <div className="relative">
            <select id="requirement"
              name="requirementId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="">
              <option key={`option-group-X`} disabled>Select a requirement</option>
              {requirements_groups.map((requirements_group: any, index: number) => (
                <optgroup key={`option-group-${index}`} className="py-3 text-gray-700 dark:text-gray-200" label={requirements_group._id}>
                  {requirements_group.requirements.map((requirement: { id: string; name: string }, index: number) => (
                    <option key={`option-${index}`} value={requirement.id} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{requirement.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
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
