import {
  AccountIcon,
  CreditCardIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  PrivilegesIcon,
  ServicesIcon,
  SettingIcon,
  TransactionIcon,
} from '../components/icons';
import { ROUTES } from './routes';

export const SIDEBAR_ITEMS = [
  { icon: HomeIcon, label: 'Dashboard', path: ROUTES.DASHBOARD },
  {
    icon: TransactionIcon,
    label: 'Transactions',
    path: ROUTES.TRANSACTIONS,
    active: false,
  },
  {
    icon: AccountIcon,
    label: 'Accounts',
    path: ROUTES.ACCOUNTS,
    active: false,
  },
  {
    icon: InvestmentIcon,
    label: 'Investments',
    path: ROUTES.INVESTMENTS,
    active: false,
  },
  {
    icon: CreditCardIcon,
    label: 'Credit Cards',
    path: ROUTES.CREDIT_CARDS,
    active: false,
  },
  { icon: LoanIcon, label: 'Loans', path: ROUTES.LOANS, active: false },
  {
    icon: ServicesIcon,
    label: 'Services',
    path: ROUTES.SERVICES,
    active: false,
  },
  {
    icon: SettingIcon,
    label: 'Settings',
    path: ROUTES.SETTINGS,
    active: false,
  },
  {
    icon: PrivilegesIcon,
    label: 'Privileges',
    path: ROUTES.PRIVILEGES,
    active: false,
  },
];
