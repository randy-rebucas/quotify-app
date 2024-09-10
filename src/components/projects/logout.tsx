import { logout } from "@/actions/auth";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function Logout() {

    const onClickHandle = async () => {
        await logout();
    }

    return (
        <button onClick={onClickHandle} className="hover:text-red-500 text-red text-sm">
            <PowerIcon className="w-[43px]" />
        </button>
    )
}