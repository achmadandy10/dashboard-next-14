import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';
import { TopbarItem } from './topbar-item';
import { TopbarItemGroup } from './topbar-item-group';
import { TopbarItems } from './topbar-items';

export type TopbarComponentProps = ComponentProps<'header'>;

const TopbarComponent: FC<TopbarComponentProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <header
      className={cn(
        'p-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
};

TopbarComponent.displayName = 'Topbar';

export const Topbar = Object.assign(TopbarComponent, {
  Item: TopbarItem,
  Items: TopbarItems,
  ItemGroup: TopbarItemGroup,
});
