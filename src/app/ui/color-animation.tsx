export default function ColorAnimation({ colors, target }: { colors: string[]; target: number | null }) {
    return (
        // <div className="js-wrapper__cover wrapper__cover main hidden">
        //     <div className="js-staggering-anim staggering-anim">
        //         <div className="js-el el bg-blue"></div>
        //         <div className="js-el el bg-gray2"></div>
        //         <div className="js-el el bg-gray3 border-left-dashed relative"></div>
        //         <div className="js-el el bg-gray4"></div>
        //         <div className="js-el el bg-gray5"></div>
        //     </div>
        // </div>
        <div className="js-wrapper__cover wrapper__cover opacity-1">
            <div className="js-staggering-anim staggering-anim">
                {colors.map((color, index) => (
                    <Color color={color} index={index} target={target} key={index} />
                ))}
            </div>
        </div>
    );
}

export function Color({ color, index, target }: {
    color: string;
    index: number;
    target: number | null
}) {
    if (target && target === index) {
        return <div className={`js-el el ${color} border-left-dashed relative`}></div>;
    }
    return <div className={`js-el el ${color}`}></div>;
}