
import { Metadata } from 'next';
import StaggerCover from '@/app/ui/stagger-cover';
import QuotifyLogo from '@/app/ui/quotify-logo';
import PageWrapper from '@/app/ui/login/page-wrapper';
import Form from '@/app/ui/login/form';

export const metadata: Metadata = {
    title: 'Signin',
};

export default function LoginPage() {
    const colors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5'];

    return (
        <div className="wrapper wrapper-signin">

            <QuotifyLogo />

            <PageWrapper>
                <div className="col-span-12 lg:col-span-2 col-start-1">
                    <h1 className="text-white lg:pt-[80px] p-30">
                        understanding
                        what things cost
                        is a step closer
                        towards a great
                        new space</h1>
                </div>
                <div className="wrapper__signform">
                    <Form />
                </div>
            </PageWrapper>

            <StaggerCover colors={colors} target={null} className="" />
        </div>
    );
}