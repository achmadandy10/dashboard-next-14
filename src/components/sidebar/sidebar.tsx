'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';
import { SidebarCollapse } from './sidebar-collapse';
import { SidebarCTA } from './sidebar-cta';
import { SidebarItem } from './sidebar-item';
import { SidebarItemGroup } from './sidebar-item-group';
import { SidebarItems } from './sidebar-items';
import { SidebarLogo } from './sidebar-logo';

export type SidebarComponentProps = ComponentProps<'aside'>;

const SidebarComponent: FC<SidebarComponentProps> = ({
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <aside aria-label="Sidebar" className={cn('', className)} {...props}>
      <div className="h-full overflow-y-auto overflow-x-hidden border-r py-4 px-3 dark:bg-gray-800">
        {children}
      </div>
    </aside>
  );
};

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
