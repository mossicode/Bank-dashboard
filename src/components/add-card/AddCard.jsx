import { cn } from '../../utils/common';
import Button from '../common/button/Button';
import Card from '../common/card/Card';
import Input from '../common/input/Input';
export default function AddCard({ context, className = '' }) {
  return (
    <Card
      className={cn(
        'flex flex-col space-y-8 font-inter font-normal xl:text-sm xl:py-6 xl:px-8 xl:leading-7  md:p-5 p-4 text-xs capitalize',
        className
      )}
    >
      <p className='text-dusty-blue tracking-0 leading-6 '>{context} </p>

      <div className='flex flex-col xl:gap-8 gap-6 '>
        <form className='grid grid-cols-1 md:grid-cols-2  md:gap-4 gap-2'>
          <label htmlFor='input'>
            Card Type
            <Input className={'w-full '} type='text' placeholder={'classic'} />
          </label>
          <label htmlFor='input'>
            Name On Card
            <Input className={'w-full '} type='text' placeholder={'My Cards'} />
          </label>
          <label htmlFor='input'>
            Card Number
            <Input
              className={'w-full '}
              type='tel'
              placeholder={'**** *** *** ****'}
            />
          </label>
          <label htmlFor='input'>
            Expiration Date
            <Input className={'w-full '} type='date' />
          </label>
        </form>
        <Button className='bg-deep-blue text-white rounded-lg capitalize xl:py-3 xl:px-10 xl:w-40 xl:h-12 md:w-32 md:h-10 md:py-2.5 md:px-6 w-full '>
          add card
        </Button>
      </div>
    </Card>
  );
}
