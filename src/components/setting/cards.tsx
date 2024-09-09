import {
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/fonts';
// import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  offices: BuildingOfficeIcon,
  users: UserGroupIcon,
  building: BuildingLibraryIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Offices" value={0} type="offices" />
      <Card title="Projects" value={0} type="building" />
      <Card title="Amenities" value={0} type="invoices" />
      <Card
        title="Users"
        value={0}
        type="users"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'users' | 'building' | 'offices';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
