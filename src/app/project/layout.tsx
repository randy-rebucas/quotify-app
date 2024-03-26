import { Metadata } from 'next';
import ColorAnimation from '../ui/color-animation';

export const metadata: Metadata = {
    title: {
        template: 'Project | %s',
        default: 'Project',
    },
    description: 'Quotify.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const colors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5']

    return (
        <div className="js-wrapper wrapper wrapper-estimation bg-fixed bg-cover">
            {children}
            <ColorAnimation colors={colors} target={2} />
        </div>
    );
}