import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import ContentWrapper, { Content, ContextValue } from './ui/content';
import QuotifyLogo from './ui/quotify-logo';
import Intro from './ui/intro';
import BackgroundAnimation from './shared/background-animation';
import { Video } from './ui/video';
import Tooltip from './ui/tooltip';
import { lato } from '@/app/shared/fonts';
import User, { IUser } from './models/User';
import { connect } from 'mongoose';
import NavButton from './ui/nav-button';


export const metadata: Metadata = {
  title: 'Welcome'
};

export default async function Page() {

  const contextItems: ContextValue[] = [
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      context: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ]

  const colors: string[] = ['bg-gray1', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

  // const user: IUser = await User.findById("66052a81a791634f499bb5aa").exec();
  // const user: IUser = await User.findOne({ email: 'bill@microsoft.com' });
  // const user: IUser = await User.findOne({ email: 'bill@microsoft.com' });
  connect(`${process.env.MONGODB_URI}`).then(async () => {
    // const users: Array<IUser> = await new User();
    // console.log(users);
    const user: IUser = await User.findById("66052a81a791634f499bb5aa").exec();
    console.log(user);
  })

  return (
    <div className="wrapper lg:bg-transparent bg-black">
      <QuotifyLogo />
            {/* <UserList /> */}
      <div className="wrapper__content grid">
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

          <NavButton/>
        </div>
      </div>

      <BackgroundAnimation colors={colors} target={null} className="opacity-1" isLinear={false} />
    </div>
  );
}
