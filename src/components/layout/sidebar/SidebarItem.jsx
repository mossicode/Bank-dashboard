import { NavLink } from 'react-router-dom';
import { cn } from '../../../utils/common';

export default function SidebarItem({
  path,
  icon: Icon,
  className,
  active,
  children,
}) {
  return (
      <NavLink  className={cn(
        'group relative w-full flex items-center py-3.5 ps-5 cursor-pointer text-light-gray hover:text-primary active:text-primary   ',
        {
          'text-primary': active,
          className,
        }
      )} to={path}>

      
      <div
        className={cn(
          'absolute left-0 top-0 w-1.5 h-full  bg-blue-600 opacity-0 group-hover:opacity-100 rounded-r',
          {
            'opacity-100': active,
          }
        )}
      >
       
      </div>

      <Icon className='size-6  ' />
      <div className='ml-6 text-lg max-lg:text-base font-medium capitalize max-[950px]:hidden max-sm:block '>
        {children}
      </div>
      </NavLink>
    
  );
}
