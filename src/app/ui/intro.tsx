import { lato } from '@/app/ui/fonts';

export default function Intro() {
    return (
        <>
            <p className={`${lato.className} text-white`}>Welcome to</p>
            <h1 className={`${lato.className} text-[44px] text-white font-lato xl:text-6xl md:text-5xl text-4xl mb-10`}>
                Quotify
            </h1>
            <p className={`${lato.className} text-white`}>Your accound has been created. You should receive a confirmation email soon.</p>
        </>
    )
}