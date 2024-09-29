import { Metadata } from 'next';
import QuotifyLogo from '../components/quotify-logo';
import Intro from '../components/intro';
import VideoWrapper, { Video } from '../components/video';
import Tooltip from '../components/tooltip';
import NavButton from '../components/nav-button';
import StaggerCover from '../components/stagger-cover';
import { ColumnValue } from '../components/columns';
import Columns from '../components/columns';
import PageWrapper from '../components/page-wrapper';
import { columnData } from '@/lib/mock';

export const metadata: Metadata = {
  title: 'Welcome'
};

export default async function Page() {

  const colors: string[] = ['bg-gray1', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A'];

  const columns: ColumnValue[] = columnData;

  return (
    <div className="wrapper lg:bg-transparent bg-black">
      <QuotifyLogo />

      <PageWrapper>

        <Intro />

        <div className="lg:col-start-2 lg:col-span-3 col-span-12">

          <VideoWrapper src={'https://quotify.b-cdn.net/flowbite.mp4'} />

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
