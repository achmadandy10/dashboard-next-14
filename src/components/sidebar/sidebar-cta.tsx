'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type SidebarCTAProps = ComponentProps<'div'>;

export const SidebarCTA: FC<SidebarCTAProps> = ({
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

SidebarCTA.displayName = 'Sidebar.CTA';
