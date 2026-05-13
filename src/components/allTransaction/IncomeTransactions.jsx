// components/Transactions/IncomeTab.jsx
import TransactionTable from './TransactionTable';

function IncomeTab({ transactions }) {
  const income = transactions.filter(tx => tx.amount > 0);
  return <TransactionTable transactions={income} />;
}

export default IncomeTab;
