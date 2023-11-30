import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';

export type TopbarItemGroupProps = ComponentProps<'ul'>;

export const TopbarItemGroup: FC<TopbarItemGroupProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <ul className={cn('flex items-center gap-4', className)} {...props}>
      {children}
    </ul>
  );
};

TopbarItemGroup.displayName = 'Topbar.ItemGroup';
