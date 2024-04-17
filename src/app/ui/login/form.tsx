'use client';

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function Form() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const { pending } = useFormStatus();
    return (
        <form action={dispatch} className="w-full">
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-full-name" type="email" name="email" placeholder="email" />
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-password" type="password" name="password" placeholder="password" />
            </div>
            <label className="md:w-full block text-white pb-4">
                <span className="text-sm">
                    don&apos;t have an account? <Link className="font-bold" href="/signup">sign up</Link>
                </span>
            </label>
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>
            <div className="w-full flex justify-end md:items-end">
                <button className="focus:shadow-outline focus:outline-none" aria-disabled={pending}>
                    <Image
                        src="/images/icon-submit.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        alt="submit"
                    />
                </button>
            </div>

        </form>
    )
}