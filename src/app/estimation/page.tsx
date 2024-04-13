import { Metadata } from "next";

import { lato } from "../ui/fonts";
import StaggerCover from "../ui/stagger-cover";
import Popup from "../ui/estimation/popup";
import PageWrapper from "../ui/page-wrapper";
import Tooltip from "../ui/tooltip";
import Title from "../ui/estimation/title";
import NavButton from "../ui/estimation/nav-button";
import Column from "../ui/estimation/column";
import Image from "next/image";
import Close from "../ui/estimation/close";

export const metadata: Metadata = {
    title: 'Estimation'
};

export default function Page() {

    const colors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5']

    return (
        <div
            style={{ backgroundImage: 'url(../87b9f42fb3d0a1130d1b.png)' }}
            className="js-wrapper wrapper bg-fixed bg-cover">

            <NavButton />

            <Popup />

            <PageWrapper>
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

                    {/* <Tooltip /> */}

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
            </PageWrapper>

            <StaggerCover colors={colors} target={2} className="opacity-1" />

        </div>
    )
}