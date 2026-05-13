import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} />
        <Route path={ROUTES.ACCOUNTS} />
        <Route path={ROUTES.TRANSACTIONS} />
        <Route path={ROUTES.SETTINGS} element />
        <Route path={ROUTES.LOGIN} element />
        <Route path={ROUTES.REGISTER} element />
        <Route path={ROUTES.INVESTMENTS} element />
        <Route path={ROUTES.CREDIT_CARDS} element />
        <Route path={ROUTES.LOANS} element />
        <Route path={ROUTES.SERVICES} element />
        <Route path={ROUTES.PRIVILEGES} element />
      </Routes>
    </BrowserRouter>
  );
}
