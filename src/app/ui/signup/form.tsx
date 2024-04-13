'use client';

import createUser from "@/app/actions";
// import createUser from "@/app/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";


export default function Form() {
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(createUser, initialState);
    const { pending } = useFormStatus();

    return (
        <form action={dispatch} className="w-full">
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-email" type="email" name="email" placeholder="email" />
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin  leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-password" type="password" name="password" placeholder="password" />
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-confirm-password" type="password" name="confirm_password" placeholder="confirm password" />
            </div>
            <label className="md:w-full block text-white pb-4">
                <span className="text-sm">
                    already have an account? <Link className="font-bold" href="/signin">sign in</Link>
                </span>
            </label>
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {state.errors?.confirm_password &&
                    state.errors.confirm_password.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                        </p>
                    ))}
            </div>
            <div className="w-full flex justify-end md:items-end">
                <button className="focus:shadow-outline focus:outline-none" type="submit" aria-disabled={pending}>
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