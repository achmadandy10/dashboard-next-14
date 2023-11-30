'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type SidebarItemsProps = ComponentProps<'div'>;

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
