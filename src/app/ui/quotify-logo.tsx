import { lato } from '@/app/ui/fonts';

export default function QuotifyLogo() {
  return (
    <div className={`${lato.className} lg:col-span-1 col-span-12 p-30 flex flex-col justify-end pb-[100px] h-full`} >
      <p className={`${lato.className} text-white`}>Welcome to</p>
      <h1 className={`${lato.className} text-[44px] text-white font-lato xl:text-6xl md:text-5xl text-4xl mb-10`}>
        Quotify
      </h1>
      <p className={`${lato.className} text-white`}>Your accound has been created. You should receive a confirmation email soon.</p>
    </div>
  );
}
