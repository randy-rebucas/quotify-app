import BackgroundAnimation from "@/app/shared/background-animation";
import Popup from "@/app/shared/popup";
import PageWrapper from "./ui/page-wrapper";

export default function Page() {
    const colors: string[] = ['bg-blue2', 'bg-white', 'bg-white', 'bg-white', 'bg-white'];

    return (
        <div className="wrapper theme theme-blue">

            <Popup />

            <PageWrapper />

            <BackgroundAnimation colors={colors} target={2} className="opacity-1" isLinear={false} />
        </div>
    )
}