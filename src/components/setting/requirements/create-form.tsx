'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { useFormState } from 'react-dom';
import { IRequirement } from '@/models/Requirement';
import { createRequirement } from '@/actions/requirement';



export default function Form({ requirements }: { requirements: IRequirement[] }) {

  const [state, dispatch] = useFormState(createRequirement, undefined);

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
                  placeholder="Enter Name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.name && <div>{state.errors.name}</div>}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="label" className="mb-2 block text-sm font-medium">
            Label

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="label"
                  name="label"
                  type="text"
                  placeholder="Enter label"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.label && <div>{state.errors.label}</div>}
              </div>
            </div>
          </label>
        </div>
        {/* Custom Space Group Name */}
        <div className="mb-4">
          <label htmlFor="group_name" className="mb-2 block text-sm font-medium">
            Group

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <select name="group_name" id="group_name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500">
                  <option value='' className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">Select</option>
                  {requirements.map((requirement: IRequirement, index: number) => (
                    <option key={index} value={requirement.name} className="py-3 text-[#005A92] hover:bg-[#D0D0D0]">{requirement.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="question" className="mb-2 block text-sm font-medium">
            Question

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="question"
                  name="question"
                  type="text"
                  placeholder="Question..."
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.question && <div>{state.errors.question}</div>}
              </div>
            </div>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="sort" className="mb-2 block text-sm font-medium">
            Sort

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="sort"
                  name="sort"
                  type="text"
                  placeholder="0"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
                {state?.errors?.sort && <div>{state.errors.sort}</div>}
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/requirements"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
