'use client';

import Link from 'next/link';

import NavLinks from './nav-links';
import { useMemo, useState } from 'react';

export default function SideNav({ user }: { user: any }) {

  const [canManage, setCanManage] = useState<boolean>(false);

  useMemo(() => {
    setCanManage(user.roles.some((role: string) => role === 'user'));
  }, [user]);

  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          Quotify
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {canManage && <NavLinks />}
      </div>
    </div>
  );
}
