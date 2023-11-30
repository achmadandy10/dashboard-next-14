'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type SidebarItemGroupProps = ComponentProps<'ul'> & {
  label?: string;
};

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  label,
  ...props
}): JSX.Element => {
  return (
    <ul
      className={cn(
        'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
        className,
      )}
      {...props}
    >
      {label && (
        <span className="text-sm font-semibold text-slate-400 mb-2">
          {label}
        </span>
      )}
      {children}
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
