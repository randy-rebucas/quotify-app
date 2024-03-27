import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import ContentWrapper, { Content, ContextValue } from './ui/content';
import QuotifyLogo from './ui/quotify-logo';
import Intro from './ui/intro';
import { Video } from './ui/video';
import Tooltip from './ui/tooltip';
import { lato } from '@/app/ui/fonts';
import ColorAnimation from './ui/color-animation';

export const metadata: Metadata = {
  title: 'Welcome'
};

export default function Page() {

  const contextItems: ContextValue[] = [
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ]

  const colors: string[] = ['bg-gray1', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

  return (
    <div className="wrapper lg:bg-transparent bg-black">
      <QuotifyLogo />

      <div className="wrapper__content animate fade-in delay-last grid">
        <div className={`${lato.className} lg:col-span-1 col-span-12 p-30 flex flex-col justify-end pb-[100px] h-full`} >
          <Intro />
        </div>

        <div className="lg:col-start-2 lg:col-span-3 col-span-12">
          <div className="grid lg:grid-cols-3 lg:grid-flow-col p-30">
            <Video />
          </div>
          <div className="grid lg:grid-cols-3 lg:grid-flow-col">
            <ContentWrapper contexts={contextItems} />
          </div>
        </div>

        <div className="wrapper__next">
          <Tooltip />
          <Link href="/management">
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

      <ColorAnimation colors={colors} target={null} className="opacity-1"/>
    </div>
  );
}
