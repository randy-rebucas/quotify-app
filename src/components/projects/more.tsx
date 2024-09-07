'use client';

import { useAppStore } from "@/app/lib/store/appStore";
import { useProjectStore } from "@/app/lib/store/projectStore";
import Link from "next/link";

export default function More() {

    const projects = useProjectStore(state => state.projects);

    return (
        <div className="js-wrapper__more wrapper__more row-start-2">
            {projects.length > 4 && <Action />}
        </div>
    )
}

export function Action() {
    const hasMore = useAppStore(state => state.hasMore);
    const setHasMore = useAppStore(state => state.setHasMore);

    return (
        <div className="col-span-4">
            <Link href="" onClick={() => setHasMore(!hasMore)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                    <path d="M1.4 17.5V1.5H10.7L9.5 0.2C9.4 0.1 9.3 0 9.1 0H0.6C0.3 0 0 0.3 0 0.7V18.3C0 18.7 0.3 19 0.6 19H1.4V17.5Z" fill="white" />
                    <path d="M16.3 7.20039L12 2.60039C11.9 2.50039 11.7 2.40039 11.6 2.40039H3.1C2.7 2.40039 2.5 2.70039 2.5 3.10039V20.7004C2.5 21.1004 2.8 21.4004 3.1 21.4004H15.8C16.2 21.4004 16.4 21.1004 16.4 20.7004V7.70039C16.5 7.50039 16.4 7.30039 16.3 7.20039ZM15 8.00039H11.3V4.00039L15 8.00039ZM15.1 19.9004H3.9V4.00039H9.9V8.60039C9.9 8.80039 10 9.10039 10.1 9.20039C10.3 9.40039 10.5 9.50039 10.7 9.50039H15V19.9004H15.1Z" fill="white" />
                </svg>
                <div className="js-wrapper__more-text pl-3">{hasMore ? 'less' : 'more'}</div>
            </Link>
        </div>
    )
}
