import { useState } from 'react';
import CircleBackground from '../common/circleBackground/CircleBackground';
import WhiteContainer from '../common/whiteContainer/WhiteContainer';
import Profile from './Profile';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import FiftyRoundedBg from '../common/fiftyRoundedBg/FiftyRoundedBg';
import SendIcon from '../icons/SendIcon';

export function TransferActionCard({ users }) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3; // how many avatars are visible at once

  function next() {
    if (current < users.length - visibleCount) {
      setCurrent(current + 1);
    }
  }

  function prev() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
    <WhiteContainer>
      <div className='flex flex-col gap-12'>
        {/* Avatars Carousel */}
        <div className='relative flex items-center gap-1'>
          {current > 0 ? (
            <CircleBackground
              onClick={prev}
              className='bg-white shadow-2xl shadow-dusty-blue cursor-pointer'
            >
              <ArrowLeftIcon className='text-dusty-blue w-4 h-4' />
            </CircleBackground>
          ) : (
            ''
          )}

          <div className='overflow-hidden w-full'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {users.map((user, id) => (
                <div
                  key={id}
                  className='basis-1/3 flex-shrink-0 w-full flex-1 px-4 focus:outline-none focus:ring-0 select-none'
                >
                  <Profile
                  
                    titleClassName='text-dark-black focus:outline-none focus:ring-0 text-nowrap flex-nowrap'
                    subClassName='text-dusty-blue nowrap '
                    variation='large'
                    alt='avatar'
                    {...user}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          {current < users.length - visibleCount ? (
            <CircleBackground
              onClick={next}
              className='bg-white shadow-2xl shadow-dusty-blue cursor-pointer'
            >
              <ArrowLeftIcon className='text-dusty-blue w-4 h-4 rotate-180' />
            </CircleBackground>
          ) : (
            ''
          )}
        </div>

        <div className='flex justify-between items-center'>
          <span className='w-[40%] font-normal text-md max-md:text-xs text-dusty-blue select-none'>
            Write Amount
          </span>
          <FiftyRoundedBg className='relative bg-slight-gray w-2/3'>
            <input
              className='text-dusty-blue text-md font-normal w-full outline-none'
              placeholder='100$'
            />
            <FiftyRoundedBg className='absolute right-0 top-0 bottom-0 bg-deep-blue w-[60%] gap-0'>
              <SendIcon className='text-white' />
              <span className='text-white text-md font-semibold hover:cursor-pointer'>
                Send
              </span>
            </FiftyRoundedBg>
          </FiftyRoundedBg>
        </div>
      </div>
    </WhiteContainer>
  );
}
