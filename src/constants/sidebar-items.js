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
  { icon: HomeIcon, label: 'Dashboard', path: ROUTES.DASHBOARD, badge: null },
  { icon: TransactionIcon, label: 'Transactions', path: ROUTES.TRANSACTIONS, badge: null },
  { icon: AccountIcon, label: 'Accounts', path: ROUTES.ACCOUNTS, badge: null },
  { icon: InvestmentIcon, label: 'Investments', path: ROUTES.INVESTMENTS, badge: null },
  { icon: CreditCardIcon, label: 'Credit Cards', path: ROUTES.CREDIT_CARDS, badge: '3' },
  { icon: LoanIcon, label: 'Loans', path: ROUTES.LOANS, badge: '2' },
  { icon: ServicesIcon, label: 'Services', path: ROUTES.SERVICES, badge: null },
  { icon: SettingIcon, label: 'Settings', path: ROUTES.SETTINGS, badge: null },
  { icon: PrivilegesIcon, label: 'Privileges', path: ROUTES.PRIVILEGES, badge: null },
];