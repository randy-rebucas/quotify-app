'use client';

import Image from "next/image";

export default function Profile({ user }: { user: any }) {
    return (
        <div className="flex-col">
            <div className="flex items-center gap-4">
                <Image className="h-16 rounded-full w-16" src="images/avatar-user-svgrepo-com.svg" width={100} height={100} alt="" />
                <div className="font-medium dark:text-white">
                    <div className="text-[#505050]">{user.name}</div>
                    <div className="text-[#505050] text-[14px]">{user.email}</div>
                    {/* <div className="text-sm text-gray-500 dark:text-gray-400">Last logedin: {user.auth.loggedAt ?? '--'}</div> */}
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-[14px]">Location: {user.office.location}</h3>
            </div>
        </div>
    )
}