'use client';

import Link from "next/link";

import { useFormState, useFormStatus } from 'react-dom'

import Image from "next/image";
import { signup } from "@/actions/auth";
import { RotatingLines } from "react-loader-spinner";

export default function Form() {
    const [state, dispatch] = useFormState(signup, undefined);

    return (
        <form action={dispatch} className="w-full">
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-name" type="text" name="name" placeholder="name" />
                {state?.errors?.name && <p>{state.errors.name}</p>}
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-email" type="email" name="email" placeholder="email" />
                {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin  leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-password" type="password" name="password" placeholder="password" />
                {state?.errors?.password && (
                    <div>
                        <p>Password must:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-confirm-password" type="password" name="confirm_password" placeholder="confirm password" />
                {state?.errors?.confirm_password && <p>{state.errors.confirm_password}</p>}
            </div>
            <label className="md:w-full block text-white pb-4">
                <span className="text-sm">
                    already have an account? <Link className="font-bold" href="/login">sign in</Link>
                </span>
            </label>
            <div className="w-full flex justify-end md:items-end">
                <SignupButton />
            </div>
        </form>
    )
}

export function SignupButton() {
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
                    src="/images/icon-submit.png"
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