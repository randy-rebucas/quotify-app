
import { deleteProject } from '@/actions/project';
import { TrashIcon } from '@heroicons/react/24/outline';

export async function DeleteProject({ id }: { id: string }) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <form action={deleteProjectWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
