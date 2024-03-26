import Link from 'next/link';
import Image from 'next/image';
import QuotifyLogo from '@/app/ui/quotify-logo';
import { Video } from './ui/video';
import WrapperAnimation from './ui/wrapper-animation';
import Tooltip from './ui/tooltip';
import { lato } from '@/app/ui/fonts';

export default function Page() {

  return (
    <div className="wrapper lg:bg-transparent bg-black">
      <div className="wrapper__logo animate fade-in delay-last">
        <Image
          src="/images/icon-search.png"
          width={37}
          height={37}
          alt="Search Icon"
        />
      </div>

      <div className="wrapper__content animate fade-in delay-last grid">
        <QuotifyLogo />

        <div className="lg:col-start-2 lg:col-span-3 col-span-12">
          <Video />
          <div className="grid lg:grid-cols-3 lg:grid-flow-col">
            <p className={`${lato.className} p-30 lg:text-black text-white`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p className={`${lato.className} p-30 lg:text-black text-white`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p className={`${lato.className} p-30 lg:text-black text-white`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="wrapper__next">
          <Tooltip />

          <Link href="/file-management">
            <Image
              src="/images/icon-submit.png"
              width={0}
              height={0}
              sizes="100vw"
              className="brightness-0 w-full h-auto"
              alt="next"
            />
          </Link>
        </div>
      </div>

      <WrapperAnimation />
    </div>
  );
}
