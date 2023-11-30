import { ToggleTheme } from '@/components/toggle-theme';
import { Topbar } from '@/components/topbar';
import { Separator } from '@/components/ui/separator';
import { FC } from 'react';
import { AvatarMenu } from './avatar-menu';
import { SearchBar } from './search-bar';

const TopbarDashboard: FC = (): JSX.Element => {
  return (
    <Topbar>
      <Topbar.Items>
        <Topbar.ItemGroup>
          <SearchBar />
        </Topbar.ItemGroup>

        <Topbar.ItemGroup>
          <Topbar.Item>N 1</Topbar.Item>
          <Topbar.Item>N 2</Topbar.Item>
          <Topbar.Item>N 3</Topbar.Item>

          <Separator orientation="vertical" className="h-6" />

          <Topbar.Item>
            <AvatarMenu />
          </Topbar.Item>

          <Topbar.Item>
            <ToggleTheme />
          </Topbar.Item>
        </Topbar.ItemGroup>
      </Topbar.Items>
    </Topbar>
  );
};

export default TopbarDashboard;
