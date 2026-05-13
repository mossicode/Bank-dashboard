import Invoices from './Invoices';
import { AppStoreIcon, PlayStationIcon, UserIcon } from '../icons';

export default {
  title: 'COMPONENTS/Invoices',
  component: Invoices,
  args: {},
};

const Invoicesdata = [
  {
    id: Date.now(),
    logo: (
      <AppStoreIcon className='bg-light-green text-dark-green rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'Apple store',
    lastInvoices: '2h ago',
    payment: '450',
  },
  {
    id: Date.now(),
    logo: (
      <UserIcon className='bg-light-amber text-amber p-3 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'Micheal',
    lastInvoices: '2 days ago',
    payment: '160',
  },
  {
    id: Date.now(),
    logo: (
      <PlayStationIcon className='text-primary bg-frosted-blue p-1 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'PlayStation',
    lastInvoices: '5 days ago',
    payment: '1085',
  },
  {
    id: Date.now(),
    logo: (
      <UserIcon className='text-light-rose bg-soft-cherry p-3 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'William',
    lastInvoices: '10 days ago',
    payment: '90',
  },
];

export function Default() {
  return (
    <div className='p-3 max-lg:w-[231px]'>
      <Invoices Invoicesdata={Invoicesdata} />
    </div>
  );
}
