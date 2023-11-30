import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type TopbarItemProps = ComponentProps<'li'>;

export const TopbarItem: FC<TopbarItemProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <li className={cn('', className)} {...props}>
      {children}
    </li>
  );
};

TopbarItem.displayName = 'Topbar.Item';
