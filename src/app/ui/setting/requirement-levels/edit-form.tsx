'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Button } from '../../button';
import { updateRequirementLevel } from '@/app/actions/requirementLevel';

export default function EditRequirementLevelForm({
  requirement,
  requirements
}: {
  requirement: any;
  requirements: any[]
}) {

  const updateRequirementLevelWithId = updateRequirementLevel.bind(null, requirement._id);
  const [state, dispatch] = useFormState(updateRequirementLevelWithId, undefined);


  return (<form action={dispatch}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
              defaultValue={requirement.level}
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
              defaultValue={requirement.unitRate}
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
            <textarea id="description" name="description" defaultValue={requirement.description} className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500">
            </textarea>
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
              placeholder="Paste image media"
              defaultValue={requirement.image}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
            {state?.errors?.image && <div>{state.errors.image}</div>}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="requirement" className="mb-2 block text-sm font-medium">
          Choose requirement
        </label>
        <div className="relative">
          <select
            id="requirement"
            name="requirementId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={requirement.requirementId}
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
      </div>
    </div>

    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/setting/requirement-levels"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
        Cancel
      </Link>
      <Button type="submit">Edit</Button>
    </div>
  </form>);
}
