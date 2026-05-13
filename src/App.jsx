import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../src/constants/routes';
import DashboardPage from './pages/dashboard/DashboardPage';
import Accounts from './pages/accounts/Accounts';
import CreditCards from './pages/credit-cards/CreditCards';
import Investments from './pages/investments/Investments';
import LoansPage from './pages/loans/LoansPage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import SettingPage from './pages/settings/SettingPage';
import TransactionPage from './pages/transactions/TransactionPage';

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.TRANSACTIONS} element={<TransactionPage />} />
          <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
          <Route path={ROUTES.CREDIT_CARDS} element={<CreditCards />} />
          <Route path={ROUTES.INVESTMENTS} element={<Investments />} />
          <Route path={ROUTES.LOANS} element={<LoansPage />} />
          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
