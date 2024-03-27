import clsx from "clsx";

type MenuData = {
    num: number
    title: string
}

export default function InformationNav({ currentIndex }: { currentIndex: number }) {
    const menus: MenuData[] = [
        {
            num: 1,
            title: 'plan upload'
        },
        {
            num: 2,
            title: 'address'
        },
        {
            num: 3,
            title: 'space size & rentable area'
        },
        {
            num: 4,
            title: 'headcount & staffing'
        }
    ];

    return (
        <div className="p-30 lg:pt-col1">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="font-latobold text-white">
                        01:
                    </h1>
                    <h4 className="font-latolight mt-3 text-white">
                        Project information
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
        <span className="font-latoblack">01.{index}:</span> <br />
        {title}
    </div>
}