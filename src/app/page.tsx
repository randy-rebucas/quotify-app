import { Metadata } from 'next';
import QuotifyLogo from './ui/quotify-logo';
import Intro from './ui/intro';
import VideoWrapper, { Video } from './ui/video';
import Tooltip from './ui/tooltip';
import User, { IUser } from './models/User';
import { connect } from 'mongoose';
import NavButton from './ui/nav-button';
import StaggerCover from './ui/stagger-cover';
import { ColumnValue } from './ui/columns';
import Columns from './ui/columns';
import PageWrapper from './ui/page-wrapper';

export const metadata: Metadata = {
  title: 'Welcome'
};

export default async function Page() {
  // // const user: IUser = await User.findById("66052a81a791634f499bb5aa").exec();
  // // const user: IUser = await User.findOne({ email: 'bill@microsoft.com' });
  // // const user: IUser = await User.findOne({ email: 'bill@microsoft.com' });
  // connect(`${process.env.MONGODB_URI}`).then(async () => {
  //   // const users: Array<IUser> = await new User();
  //   // console.log(users);
  //   const user: IUser = await User.findById("66052a81a791634f499bb5aa").exec();
  //   console.log(user);
  // })

  const colors: string[] = ['bg-gray1', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A'];

  const columns: ColumnValue[] = [
    {
      column:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      column:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      column:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="wrapper lg:bg-transparent bg-black">
      <QuotifyLogo />

      <PageWrapper>
        
        <Intro />

        <div className="lg:col-start-2 lg:col-span-3 col-span-12">

          <VideoWrapper src="https://quotify.mmoser.app/src/videos/flowbite.mp4" />

          <Columns columns={columns} />

        </div>

        <div className="wrapper__next">
          <Tooltip />

          <NavButton />
        </div>
      </PageWrapper>

      <StaggerCover colors={colors} target={null} className="opacity-1" />
    </div>
  );
}
