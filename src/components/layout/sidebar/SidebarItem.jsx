import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../../utils/common';

export default function SidebarItem({
  path,
  icon: Icon,
  className,
  badge,
  children,
  collapsed = false,
}) {
  const location = useLocation();
  const isActive =
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <NavLink
      className={cn(
        'group relative w-full flex items-center py-3.5 ps-5 cursor-pointer text-light-gray hover:text-primary active:text-primary transition-colors duration-200',
        {
          'text-primary bg-primary/5': isActive,
          className,
        }
      )}
      to={path}
      aria-current={isActive ? 'page' : undefined}
    >
      <div
        className={cn(
          'absolute left-0 top-0 w-1.5 h-full bg-blue-600 opacity-0 group-hover:opacity-100 rounded-r transition-opacity duration-200',
          {
            'opacity-100': isActive,
          }
        )}
      />

      <Icon
        className={cn('size-6 flex-shrink-0', { 'text-primary': isActive })}
        aria-hidden="true"
      />

      {!collapsed && (
        <>
          <div className='ml-4 text-lg font-medium capitalize transition-opacity duration-200'>
            {children}
          </div>

          {badge && (
            <span
              className={cn(
                'ml-auto mr-4 px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-white',
                !collapsed && 'hidden max-sm:inline-flex'
              )}
              aria-label={`${badge} notifications`}
            >
              {badge}
            </span>
          )}
        </>
      )}

      {collapsed && badge && (
        <span
          className='absolute -top-1 -right-1 w-5 h-5 text-xs font-semibold rounded-full bg-primary text-white flex items-center justify-center'
          aria-label={`${badge} notifications`}
        >
          {badge}
        </span>
      )}
    </NavLink>
  );
}
