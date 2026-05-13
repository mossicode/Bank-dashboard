import { useState } from 'react';
import Avatar from '../../common/avatar/Avatar';
import { NotificationIcon, SearchIcon, SettingIcon } from '../../icons';
import HomeMenu from '../../icons/HomeMenu';
import Sidebar from '../../layout/sidebar/Sidebar';
const rightIconsClasses =
  'p-3 rounded-full bg-off-white place-content-center hidden sm:grid';

export default function Topbar({ setIsSidebar }) {
  const [sidebarSituation, setSidebarsituation] = useState(false);
  function sidebarMenu() {
    setSidebarsituation(!sidebarSituation);
    setIsSidebar(true);
  }
  return (
    <div className='bg-white w-full py-5 px-6 border-s border-gray-100 max-sm:px-3'>
      <div>
        {sidebarSituation ? (
          <Sidebar />
        ) : (
          <>
            <div className=' flex justify-between gap-4 items-center topbar'>
              <div className='sm:hidden' onClick={sidebarMenu}>
                <HomeMenu />
              </div>
              <h2 className='font-semibold text-2.5xl leading-full tracking-0 text-charcoal-blue sm:text-3xl lg:text-3.5xl'>
                Overview
              </h2>

              <div className='flex items-center gap-4'>
                {/* search bar  */}
                <div className='space-x-7 hidden sm:flex'>
                  <div className='rounded-10 focus-within:ring-1  focus-within:ring-dusty-blue bg-off-white flex items-center justify-center py-3.5 px-6 '>
                    <SearchIcon className='size-5 text-dusty-blue ' />
                    <input
                      type='text'
                      placeholder='Search for something'
                      className='w-full ml-3.5 outline-none placeholder:text-sm bg-off-white placeholder:text-light-slate-blue  font-normal'
                    />
                  </div>

                  {/* settings */}
                  <a href='#' className={rightIconsClasses}>
                    <SettingIcon className='text-dusty-blue size-6' />
                  </a>

                  {/* notifications  */}
                  <a href='#' className={rightIconsClasses}>
                    <NotificationIcon className='text-soft-red size-6' />
                  </a>
                </div>

                {/* profile  */}
                <Avatar src='/assets/images/prof.jpeg' alt='Avatar' />
              </div>
            </div>
            <div className='sm:hidden mt-3'>
              <div className='rounded-10 focus-within:ring-1  focus-within:ring-dusty-blue bg-off-white flex items-center justify-center py-2 p-3 '>
                <SearchIcon className='size-5 text-dusty-blue ' />
                <input
                  type='text'
                  placeholder='Search for something'
                  className='w-full ml-3 outline-none placeholder:text-sm bg-off-white placeholder:text-light-slate-blue  font-normal'
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
