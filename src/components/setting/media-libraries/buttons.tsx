

import { deleteMedia } from '@/actions/media';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Create() {
  return (
    <Link
      href="/setting/media-libraries/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="md:block">Upload</span>{' '}
    </Link>
  );
}

export function Update({ id }: { id: string }) {
  return (
    <Link
      href={`/setting/media-libraries/${id}/edit`}
      className="border hover:bg-gray-100 hover:text-blue-600 p-2 rounded-md text-blue/100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export async function Delete({ id }: { id: string }) {
  const deleteMediaLibraryWithId = deleteMedia.bind(null, id);

  return (
    <form action={deleteMediaLibraryWithId}>
      <button className="hover:bg-gray-100 hover:text-blue-600 p-2 rounded-md">
        <span className="sr-only">Delete</span>
        <TrashIcon className="text-red-500 w-5" />
      </button>
    </form>
  );
}
