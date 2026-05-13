import ReuesableTitleSubTitle from '../common/reusabletTitle/ReusableTitleSubTitle';
import ReusableTitle from '../common/reusabletTitle/ReusableTitle';

export default function TransactionTable({ lastTransactions }) {
  const transactionsData = lastTransactions.slice(0, 3);

  return (
    <div className=''>
      <div className='bg-white rounded-3xl  w-full min-w-full  p-6 max-lg:py-3.5 max-lg:px-4 max-lg:rounded-5 max-sm:rounded-2xl '>
        {transactionsData.map(transaction => (
          <div
            key={transaction.id}
            className='grid grid-cols-7 max-md:grid-cols-4 items-center mb-2.5 '
          >
            <div className='flex capitalize text-left col-span-3 text-nowrap'>
              <div className='pe-6 max-lg:pe-4 max-sm:pe-3'>
                {transaction.logo}
              </div>
              <ReuesableTitleSubTitle
                title={transaction.description}
                subTitle={transaction.date}
              />
            </div>
            <div className='text-sm text-left max-md:hidden capitalize'>
              <ReusableTitle className='text-dusty-blue'>
                {transaction.transactionCategories}
              </ReusableTitle>
            </div>
            <div className='text-sm text-left max-md:hidden'>
              <ReusableTitle className='text-dusty-blue'>
                {transaction.id}
              </ReusableTitle>
            </div>
            <div className='text-sm text-left max-md:hidden capitalize col-span-1'>
              <ReusableTitle className='text-dusty-blue'>
                {transaction.transactionType}
              </ReusableTitle>
            </div>
            <div
              className={`font-medium text-right text-base max-lg:text-sm max-sm:text-xs ${
                transaction.amount < 0 ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {transaction.amount < 0
                ? `-$${Math.abs(transaction.amount)}`
                : `+$${transaction.amount}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
