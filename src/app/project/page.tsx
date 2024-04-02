import { Metadata } from "next";
import Popup from "../shared/popup";
import { lato } from '@/app/shared/fonts';
import BackgroundAnimation from "../shared/background-animation";
import NavButton from "./ui/nav-button";
import PageWrapper from "./ui/page-wrapper";
import Close from "../shared/close";
import Tooltip from "./ui/tooltip";
import Column from "./ui/column";
import Title from "./ui/title";

export const metadata: Metadata = {
    title: 'Estimation'
};

export default function Page() {

    const colors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5']

    return (
        <PageWrapper>

            <NavButton />

            <Popup />

            <div className="js-autoplay-show wrapper__content grid">
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">

                    <Title title='project definition' />

                    <div className="js-autoplay-show js-estimation-col estimation-col grid grid-cols-2 grid-flow-col h-full">
                        <Column index={1} cursor='one' title='Project information'>
                            <p className={`${lato.className} text-white pb-3`}>Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost
                                together.</p>
                        </Column>
                        <Column index={2} cursor='two' title='Area breakdown'>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                        </Column>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">

                    <Title title='project estimation' />

                    <Tooltip />

                    <div className="js-estimation-col estimation-col js-autoplay-show grid grid-cols-3 grid-flow-col h-full">
                        <Column index={3} cursor='three' title='Requirements'>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost
                                together.</p>
                        </Column>
                        <Column index={4} cursor='four' title='Refinements'>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost
                                together.</p>
                        </Column>
                        <Column index={5} cursor='five' title='Estimate summary'>
                            <p className="text-white">Here is where you will add ingot to start shaping your project
                                and
                                letting the system know what you have in mind so we can come up with a cost
                                together.
                            </p>
                        </Column>
                    </div>
                </div>
            </div>

            <BackgroundAnimation colors={colors} target={2} className="opacity-1" isLinear={false} />

        </PageWrapper>
    )
}