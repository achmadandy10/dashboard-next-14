'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, FC } from 'react';

export type SidebarItemProps = ComponentProps<typeof Link> & {
  href: string;
  icon?: FC<ComponentProps<'svg'>>;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  children,
  className,
  href,
  icon: Icon,
  ...props
}): JSX.Element => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          pathname === href && 'bg-gray-900 text-white hover:bg-gray-700',
          className,
        )}
        {...props}
      >
        {Icon && (
          <Icon
            className={cn(
              'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              pathname === href && 'text-white',
            )}
          />
        )}

        <span className="px-3 flex-1 whitespace-nowrap">{children}</span>
      </Link>
    </li>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
