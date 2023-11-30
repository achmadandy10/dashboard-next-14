import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type TopbarItemsProps = ComponentProps<'div'>;

export const TopbarItems: FC<TopbarItemsProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
};

TopbarItems.displayName = 'Topbar.Items';
