import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import  { Content } from "../ui/content";
import ColorAnimation from "../ui/color-animation";

export const metadata: Metadata = {
    title: 'Create New'
};

export default function Page() {

    const colors: string[] = ['bg-gray1B', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

    return (
        <div className="wrapper lg:bg-transparent bg-black">
            <div className="wrapper__content animate fade-in delay-last grid">
                <div className="lg:col-span-1 col-span-12 p-30 flex flex-col justify-between w-full h-full">
                    <Link href="/settings" className="flex wrapper__settings">
                        <Image
                            src="/images/icon-settings.svg"
                            width={50}
                            height={50}
                            className="pr-5 brightness-200 contrast-100"
                            alt="settings"
                        />
                        <span className="font-latoblack">settings</span>
                    </Link>
                    <Link href="/estimation">
                        <Image
                            src="/images/icon-create.svg"
                            width={50}
                            height={50}
                            alt="create-new"
                        />
                    </Link>
                </div>

                <div className="lg:col-start-3 lg:col-span-1 col-span-12 flex flex-col items-center justify-center">
                    <Content context='Once you create a project, it will show here.' />
                </div>
            </div>

            <ColorAnimation colors={colors} target={null}/>
        </div>
    )
}