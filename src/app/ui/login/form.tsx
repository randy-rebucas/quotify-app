'use client';

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from 'react-dom';
import { login } from "@/app/actions/auth";

export default function Form() {
    const [state, dispatch] = useFormState(login, undefined);

    return (
        <form action={dispatch} className="w-full">
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-full-name" type="email" name="email" placeholder="email" />
                {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>
            <div className="md:w-full pb-4">
                <input
                    className="bg-transparent font-latothin leading-tight placeholder-white appearance-none border-t-0 border-l-0 border-r-0 border-b w-full text-white focus:outline-none"
                    id="inline-password" type="password" name="password" placeholder="password" />
                {state?.errors?.password && <p>{state.errors.password}</p>}
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
    )
} 