
import { getSession } from "@/actions/session";
import { fetchUserById } from "@/lib/data";
import SideNav from "@/components/setting/sidenav";



export default async function Layout({ children }: { children: React.ReactNode }) {
    
    const session = await getSession();

    const user = await fetchUserById(session?.userId);

    return (
        <div className="flex h-screenmd:flex-row md:overflow-hidden">
            <div className=" flex-none md:w-64">
                <SideNav user={user}/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}