'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';
import { Button } from '../../button';
import { updateMedia } from '@/app/actions/media';

export default function EditUserForm({
  media,
}: {
  media: any;
}) {

  const updateMediaWithId = updateMedia.bind(null, media._id);
  const [state, dispatch] = useFormState(updateMediaWithId, undefined);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">


      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/media-libraries"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
        </Link>
        <Button type="submit">Edit</Button>
      </div>
    </form>
  );
}
