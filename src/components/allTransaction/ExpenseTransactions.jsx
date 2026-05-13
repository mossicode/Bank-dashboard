// components/Transactions/ExpenseTab.jsx
import TransactionTable from './TransactionTable';

function ExpenseTab({ transactions }) {
  const expenses = transactions.filter(tx => tx.amount < 0);
  return <TransactionTable transactions={expenses} />;
}

export default ExpenseTab;
