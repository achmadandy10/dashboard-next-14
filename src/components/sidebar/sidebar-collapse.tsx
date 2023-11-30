'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, FC, useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';

export type SidebarCollapseProps = ComponentProps<'button'> & {
  label: string;
  icon?: FC<ComponentProps<'svg'>>;
};

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  label,
  icon: Icon,
  ...props
}): JSX.Element => {
  const [collapse, setCollapse] = useState(false);

  return (
    <li>
      <button
        className={cn(
          'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          className,
        )}
        onClick={() => setCollapse(!collapse)}
        {...props}
      >
        {Icon && (
          <Icon
            className={cn(
              'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
            )}
          />
        )}

        <span className="ml-3 flex-1 whitespace-nowrap text-left">{label}</span>

        <HiOutlineChevronLeft
          className={cn(
            'h-6 w-6 ease-in-out duration-300',
            collapse && '-rotate-90',
          )}
        />
      </button>
      <ul
        className={cn(
          'space-y-2 max-h-0 overflow-hidden ease-in-out duration-300',
          collapse && 'py-2 h-auto max-h-screen',
        )}
      >
        {children}
      </ul>
    </li>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
