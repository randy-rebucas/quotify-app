export default function ColorAnimation({ colors, target, className, isLinear }: { 
    colors: string[]; 
    target: number | null; 
    className: string | null;
    isLinear: boolean;
}) {
    return (
        <div className={`js-wrapper__cover wrapper__cover ${className}`}>
            <div className={`${isLinear ? 'js-linear-anim linear-anim el' : 'js-staggering-anim staggering-anim'}`}>
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