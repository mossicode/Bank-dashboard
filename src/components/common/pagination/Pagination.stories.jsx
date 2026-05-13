import Pagination from './Pagination';

const data = [
  { id: 1, desc: 'Transaction #1', amount: '200.50' },
  { id: 2, desc: 'Transaction #2', amount: '-150.00' },
  { id: 3, desc: 'Transaction #3', amount: '300.00' },
  { id: 4, desc: 'Transaction #4', amount: '-50.75' },
  { id: 5, desc: 'Transaction #5', amount: '120.00' },
  { id: 6, desc: 'Transaction #6', amount: '-90.25' },
  { id: 7, desc: 'Transaction #7', amount: '450.00' },
  { id: 8, desc: 'Transaction #8', amount: '-30.10' },
  { id: 9, desc: 'Transaction #9', amount: '75.00' },
  { id: 10, desc: 'Transaction #10', amount: '-200.00' },
  { id: 11, desc: 'Transaction #11', amount: '500.00' },
  { id: 12, desc: 'Transaction #12', amount: '-125.50' },
  { id: 13, desc: 'Transaction #13', amount: '250.00' },
  { id: 14, desc: 'Transaction #14', amount: '-100.00' },
  { id: 15, desc: 'Transaction #15', amount: '80.00' },
];

export default {
  title: 'Components/Common/Pagination',
  component: Pagination,
};

export function Default() {
  return <Pagination data={data} currentPage={2} totalPages={4} />;
}
