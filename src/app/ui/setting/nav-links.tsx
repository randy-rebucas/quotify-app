'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Settings', href: '/setting' },
  { name: 'Offices', href: '/setting/offices' },
  { name: 'Users', href: '/setting/users' },
  { name: 'Projects', href: '/setting/projects' },
  { name: 'Amenity Categories', href: '/setting/amenity-categories' },
  { name: 'Amenities', href: '/setting/amenities' },
  { name: 'Custom Spaces', href: '/setting/custom-spaces' },
  { name: 'Menus', href: '/setting/menus' },
  { name: 'Media Libraries', href: '/setting/media-libraries' },
  { name: 'Requirements', href: '/setting/requirements' },
  { name: 'Requirement Levels', href: '/setting/requirement-levels' },
  { name: 'Refinements', href: '/setting/refinements' },
  { name: 'Refinement Levels', href: '/setting/refinement-levels' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className=" md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
