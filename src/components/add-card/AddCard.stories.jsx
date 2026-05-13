import AddCard from './AddCard';

export default {
  title: 'components/AddCard',
  Component: 'AddCard',
};

export function Default(args) {
  return <AddCard {...args} className='xl:w-3xl xl:h-112 md:w-480 w-full' />;
}

Default.args = {
  context: `Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.`,
};
