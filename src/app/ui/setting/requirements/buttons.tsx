
import { deleteRefinement } from '@/app/actions/refinement';
import { deleteRequirement } from '@/app/actions/requirement';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Create() {
  return (
    <Link
      href="/setting/requirements/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="md:block">Create</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function Update({ id }: { id: string }) {
  return (
    <Link
      href={`/setting/requirements/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export async function Delete({ id }: { id: string }) {
  const deleteRequirementWithId = deleteRequirement.bind(null, id);

  return (
    <form action={deleteRequirementWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
