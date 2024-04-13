import { lato } from "../fonts";
import { Column } from "./column";


export default function Empty() {
    return (
        <div className="lg:col-start-3 lg:col-span-1 col-span-12 flex flex-col items-center justify-center">
            <Column>
                <p className={`${lato.className} p-30 lg:text-black text-white`}>Once you create a project, it will show here.</p>
            </Column>
        </div>
    )
}