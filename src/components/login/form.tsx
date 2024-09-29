'use client';

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from 'react-dom';
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import { login } from "@/actions/auth";
import { RotatingLines } from "react-loader-spinner";

export default function Form() {
    const [state, dispatch] = useFormState(login, undefined);

    return (
        <form action={dispatch} className="w-full">
            {state?.errors && <div
                className="flex flex-col gap-3"
                aria-live="polite"
                aria-atomic="true" >
                {state?.errors?.email && <div className="flex gap-2">
                    <div>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                    <p className="text-sm text-red-500">{state.errors.email}</p>
                </div>}
                {state?.errors?.password && <div className="flex gap-2">
                    <div>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                    <p className="text-sm text-red-500">{state.errors.password}</p>
                </div>}
            </div>}
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
            <div className="w-full flex justify-end md:items-end">
                <LoginpButton />
            </div>

        </form>
    )
}

export function LoginpButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending && <RotatingLines
                visible={true}
                width="65"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />}
            {!pending && <button className="focus:shadow-outline focus:outline-none" type="submit" aria-disabled={pending}>
                <Image
                    src={'https://quotify.b-cdn.net/icon-submit.png'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    alt="submit"
                />
            </button>}
        </>
    )
} 