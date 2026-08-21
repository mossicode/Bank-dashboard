import { SIDEBAR_ITEMS } from '../../../constants/sidebar-items';
import { useState, useEffect } from 'react';
import Logo from '../../common/Logo';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';
import { cn } from '../../../utils/common';

import SidebarItem from './SidebarItem';

export default function Sidebar({
  setIsSidebar,
  collapsed = false,
  onToggleCollapsed,
}) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  function closeMenu() {
    setIsSidebar(false);
  }

  function handleToggleCollapsed() {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggleCollapsed?.(newCollapsed);
  }

  return (
    <div
      className={cn(
        'flex flex-col h-screen max-h-screen bg-white border-r border-gray-100 transition-all duration-300',
        {
          'w-72': !isCollapsed && !isMobile,
          'w-20': isCollapsed && !isMobile,
          'fixed z-50 shadow-xl': isMobile,
          'translate-x-0': isMobile || (!isCollapsed && !isMobile),
          '-translate-x-full': isMobile && !isCollapsed,
        }
      )}
    >
      <div
        className={cn('flex flex-col flex-1 overflow-y-auto px-2 py-6', {
          'pe-10': !isCollapsed,
        })}
      >
        <div
          className={cn('flex items-center justify-between mb-8 px-2', {
            'pr-4': !isCollapsed,
          })}
        >
          <Logo
            className={cn('mb-0 py-2 shrink-0', {
              'max-w-12': isCollapsed,
            })}
          />
          {!isMobile && (
            <button
              onClick={handleToggleCollapsed}
              className={cn(
                'p-2 rounded-lg text-light-gray hover:text-primary hover:bg-primary/5 transition-all duration-200 shrink-0',
                isCollapsed && 'rotate-180'
              )}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded={!isCollapsed}
            >
              {isCollapsed ? (
                <ArrowRightIcon className='size-5' />
              ) : (
                <ArrowLeftIcon className='size-5' />
              )}
            </button>
          )}
        </div>

        <nav className='flex-1' aria-label='Main navigation'>
          {SIDEBAR_ITEMS.map(item => (
            <SidebarItem
              key={item.label}
              path={item.path}
              icon={item.icon}
              badge={item.badge}
              collapsed={isCollapsed}
            >
              {item.label}
            </SidebarItem>
          ))}
        </nav>
      </div>

      {isMobile && (
        <div className='md:hidden p-4 border-t border-gray-100'>
          <button
            onClick={closeMenu}
            className='w-full flex items-center justify-center gap-2 px-4 py-2.5 text-light-gray hover:text-primary font-medium rounded-lg transition-colors'
          >
            <ArrowLeftIcon className='size-5' />
            <span>Close</span>
          </button>
        </div>
      )}
    </div>
  );
}
