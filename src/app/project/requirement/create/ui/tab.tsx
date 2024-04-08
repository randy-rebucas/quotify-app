import clsx from "clsx";
import { menus } from "./entities";
import TabContentForm from "./tab-content-form";
import TabForm from "./tab-form";
import { useContext } from "react";
import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";

export default function Tab() {

    const { projectRequirementMenu } = useContext(ProjectRequirementMenuContext);

    {/* <!--
            /*  Menu Main
            /*  This block is hidden on page load.
            /*  It will be shown after page introduction animation is finished.
            /-->
             */}
    return (
        <>
            {/* js-tabs absolute top-[52px] z-30 right-20 */}
            {/* <!--One Tab Shown--> */}
            <div data-col="1" className="js-tabs absolute top-[52px] z-30 right-20">
                <h3>
                    <a data-menu="A" className="-tab tabs-tab active">
                        A:
                    </a>
                </h3>

                {/* new estimateion form here  */}
                <TabForm />
            </div>

            <div data-menu="A" className="js-main-menu menu col-start-5 animate fade-in-2 bg-green5 flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                <div className="h-full flex flex-col justify-between">
                    {/* <!-- This is the menu block header --> */}
                    <div className="estimation-col__header px-30">
                        <div className="flex items-end justify-start mt-[7.593vh]">
                            <h2 className="opacity-60">Main estimation</h2>
                        </div>
                        <p className="mt-3 font-latolight">this is a short description for this estimate.</p>
                    </div>

                    <div className="flex flex-col justify-between h-full mt-[8.519vh]">
                        <div className="px-30">
                            <div className="js-main-menu__header">
                                <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">
                                    03:
                                </h2>
                                <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">
                                    Requirements
                                </h4>
                                <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                            </div>
                            <div className="js-main-menu__content estimation-col__content">
                                {menus.map((menu, index) => (
                                    <Menu index={menu.num} currentIndex={projectRequirementMenu.menu} title={menu.title} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-darkgreen2 p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                            <span className="text-[18px] leading-[24px] font-lato">cost estimate <br />per square foot</span>
                            <span className="text-[53px] font-latoblack">$55</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--content section--> */}
            <div className="col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
                <TabContentForm />
            </div>
        </>
    )
}

export function Menu({ index, currentIndex, title }: {
    index: number;
    currentIndex: number
    title: string
}) {
    return <div className={clsx(
        'js-step-indicator step-indicator js-has-sub-step',
        {
            'active': currentIndex === index,
        },
    )}>
        <span className="font-latoblack">03.{index}:</span> <br />
        {title}
    </div>
}