import profileImg from '../../../public/assets/images/profile.jpg';
import Vector from '../icons/Vector';
import Input from '../common/input/Input';
import Button from '../common/button/Button';

export default function ProfileTab({ profileData }) {
  return (
    <div className='bg-white w-full '>
      <div className=' md:gap-14 md:items-start md:flex-row gap-5  w-full  flex flex-col '>
        {/* Profile Image */}
        <div className='relative flex justify-center md:justify-start    '>
          <img
            src={profileImg}
            alt='profile photo'
            className='md:w-36 md:h-32 size-44 rounded-full object-cover'
          />
          <span className='absolute md:bottom-3 md:-right-0.5 md:size-8 size-10 rounded-full bg-deep-blue  bottom-8 right-18 flex items-center justify-center '>
            <Vector className='w-4 h-4' />
          </span>
        </div>

        {/* Form */}
        <div className='  w-full flex flex-col gap-5 '>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 '>
            {profileData.map((item, index) => (
              <div key={index} className='flex flex-col justify-start gap-1'>
                <label className='mx-1 text-sm font-normal leading-full tracking-0'>
                  {item.label}
                </label>
                <Input
                  type={item.type}
                  placeholder={item.placeholder}
                  className='w-full'
                />
              </div>
            ))}
          </form>

          <div className='flex justify-end'>
            <Button className='bg-deep-blue text-white rounded-lg capitalize xl:py-3 xl:px-10 xl:w-40 xl:h-12 md:w-32 py-2.5 px-6 w-full h-10'>
              save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
