import clsx from "clsx";
import { menus } from "./menu";

export default function InfoMenu({ currentIndex }: { currentIndex: number }) {
    return (
        <div className="p-30 lg:pt-col1">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="font-latobold text-white">
                        02.{currentIndex + 1}:
                    </h1>
                    <h4 className="font-latolight mt-3 text-white">
                        Area Breakdown
                    </h4>
                    <div className="estimation-col__bar mt-6 mb-6"></div>
                    <div className="estimation-col__content">
                        {menus.map((menu, index) => (
                            <Menu index={index + 1} currentIndex={currentIndex + 1} title={menu.title} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Menu({ index, currentIndex, title }: {
    index: number;
    currentIndex: number
    title: string
}) {
    return <div className={clsx(
        'js-step-indicator step-indicator',
        {
            'active': currentIndex === index,
        },
    )}>
        <span className="font-latoblack">02.{index}:</span> <br />
        {title}
    </div>
}