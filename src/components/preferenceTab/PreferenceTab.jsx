import HeaderTitleItem from '../common/Header/HeaderTitleItem';
import ToggleButton from '../common/toggleButton/ToggleButton';
// import CurrencyInput from 'react-currency-input-field';
import Button from '../common/button/Button';

export default function PreferenceTab() {
  const timezones = Intl.supportedValuesOf('timeZone');

  return (
    <div className='bg-white w-full flex flex-col gap-5 py-4'>
      {/* Currency & Timezone */}
      <div className='flex md:flex-row flex-col gap-5'>
        {/* Currency */}
        <div className='flex flex-col gap-1  w-full'>
          <HeaderTitleItem className='text-deep-koamaru text-sm'>
            Currency
          </HeaderTitleItem>
          {/* <CurrencyInput
            placeholder='USD'
            defaultValue=''
            decimalsLimit={2}
            className='w-full rounded-2xl xl:rounded-xl border border-azureish-White p-3 placeholder:text-xs placeholder:font-normal placeholder:font-inter placeholder:text-dusty-blue placeholder:capitalize focus:outline-none'
          /> */}
        </div>

        {/* Timezone */}
        <div className='flex flex-col gap-1 w-full'>
          <HeaderTitleItem className='text-deep-koamaru text-sm'>
            Time Zone
          </HeaderTitleItem>
          <select className='w-full rounded-2xl xl:rounded-xl border border-azureish-White text-dusty-blue text-xs p-4 focus:outline-none'>
            <option value=''>(GMT-12:00) International Date Line West</option>
            {timezones.map(tz => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Notifications */}
      <HeaderTitleItem className='text-deep-koamaru text-sm md:text-lg'>
        Notification
      </HeaderTitleItem>
      <div className='flex flex-col gap-2'>
        <ToggleButton
          toggleText='I send or receive digital currency'
          isActive='true'
        />
        <ToggleButton toggleText='I receive merchant orders' />
        <ToggleButton
          toggleText='There are recommendations for my account currency'
          isActive='true'
        />
      </div>

      {/* Save Button */}
      <div className='flex md:justify-end justify-center mb-4'>
        <Button className='w-full md:w-32 xl:w-40 h-10 xl:h-12 py-2.5 xl:py-3 px-6 xl:px-10 bg-deep-blue text-white rounded-lg capitalize'>
          Save
        </Button>
      </div>
    </div>
  );
}
