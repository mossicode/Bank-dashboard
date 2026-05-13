import HeaderTitleItem from '../common/Header/HeaderTitleItem';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import ToggleButton from '../common/toggleButton/ToggleButton';

export default function SecurityTab() {
  return (
    <div className='flex flex-col gap-2 w-full md:px-5 p-0'>
      <div className='xl:gap-4 gap-3 flex flex-col items-start justify-start  mb-5'>
        <HeaderTitleItem className='text-deep-koamaru'>
          Two-factor Authentication
        </HeaderTitleItem>
        <ToggleButton
          toggleText='Enable or disable two factor authentication'
          isActive='true'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <HeaderTitleItem className='text-deep-koamaru text-sm font-medium mb-3.5'>
          Change Password
        </HeaderTitleItem>

        <div className='flex flex-col gap-4'>
          <label htmlFor='input'>
            Current Password
            <Input
              className={'md:w-80 w-full block'}
              type='password'
              placeholder={'*******'}
            />
          </label>
          <label htmlFor='input'>
            New Password
            <Input
              className={'md:w-80 w-full block'}
              type='password'
              placeholder={'******'}
            />
          </label>
        </div>
        <div className='flex justify-end'>
          <Button className='bg-deep-blue text-white rounded-lg capitalize xl:py-3 xl:px-10 xl:w-40 xl:h-12 md:w-32 py-2.5 px-6 w-full h-10'>
            save
          </Button>
        </div>
      </div>
    </div>
  );
}
