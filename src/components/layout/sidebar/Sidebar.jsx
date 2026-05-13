import { SIDEBAR_ITEMS } from '../../../constants/sidebar-items';
import Logo from '../../common/Logo';

import SidebarItem from './SidebarItem';

export default function Sidebar({ setIsSidebar }) {
  function closeMenu() {
    setIsSidebar(false);
  }
  return (
    <div className='flex justify-between h-screen max-h-screen '>
      <div className='flex flex-col justify-first  box-border  px-2 pe-10 '>
        <Logo className='mb-0 py-8' />
        {SIDEBAR_ITEMS.map(item => (
          <SidebarItem
            path={item.path}
            key={item.label}
            icon={item.icon}
            active={item.active}
          >
            {item.label}
          </SidebarItem>
        ))}
      </div>
      <div className='md:hidden pe-4 pt-4' onClick={closeMenu}>
        close
      </div>
    </div>
  );
}
