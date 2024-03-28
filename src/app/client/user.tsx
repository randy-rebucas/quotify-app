"use client";

import useUserLists from "../lib/data";
import { IUser } from "../models/User";


export default function UserLists() {

    const { users, isLoading, error } = useUserLists();

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <ul>
                {users.map((user: IUser, index: number) => {
                    return (
                        <li key={index}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

