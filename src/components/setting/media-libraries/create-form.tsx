'use client';

import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { Button } from '@/components/button';
import { useFormState } from 'react-dom';
import Image from "next/image";
import { createMedia } from '@/actions/media';

export default function Form() {

  const [state, dispatch] = useFormState(createMedia, undefined);

  const [file, setFile] = useState<File | undefined>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList
    }

    setFile(target.files[0])
  }

  return (
    <form action={dispatch}>

      {/* User Title */}

      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Upload Image
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleOnChange}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
            {state?.errors?.image && <div>{state.errors.image}</div>}
          </div>
        </div>
      </div>
      {file &&
        <p className="mb-5">
          <Image src={URL.createObjectURL(file)} alt={""} width={100} height={100} />
        </p>
      }

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/setting/media-libraries"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Media</Button>
      </div>
    </form>
  );
}
