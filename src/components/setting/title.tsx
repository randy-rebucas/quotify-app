import { lusitana } from "@/app/fonts";


export default function Title({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>{title}</h1>
        </div>
    );
}