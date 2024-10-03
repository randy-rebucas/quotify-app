'use client';

import Link from 'next/link';

import { useFormState } from 'react-dom';

import Image from "next/image";
import { updateMedia } from '@/actions/media';
import { Button } from '@/components/button';

export default function EditMediaForm({
  media,
}: {
  media: any;
}) {

  const updateMediaWithId = updateMedia.bind(null, media._id);
  const [state, dispatch] = useFormState(updateMediaWithId, undefined);

  return (
    <div className='flex flex-row gap-6'>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <Image
          src={media.fileName}
          width={350}
          height={350}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt='preview'
        />
      </div>
      <form action={dispatch} className="flex-grow">
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={media.title}
                  placeholder="Enter title"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="alternativeText" className="mb-2 block text-sm font-medium">
            Alternative Text

            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="alternativeText"
                  name="alternativeText"
                  type="text"
                  defaultValue={media.alternativeText}
                  placeholder="Enter alternativeText"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </label>
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
    </div>
  );
}
