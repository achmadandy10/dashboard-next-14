'use client';

import { Sidebar } from '@/components/sidebar';
import { FC } from 'react';
import { HiOutlineHome } from 'react-icons/hi';

const SidebarDashboard: FC = (): JSX.Element => {
  return (
    <Sidebar aria-label="Sidebar Dashboard" className="h-screen w-64 fixed">
      <Sidebar.Logo href="/" img={'/favicon.ico'} imgAlt="Sidebar Logo">
        Logo
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup label="Group 1">
          <Sidebar.Item href="/" icon={HiOutlineHome}>
            Menu 1
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiOutlineHome} label="E-commerce">
            <Sidebar.Item href="/menu-2">Submenu 1</Sidebar.Item>
            <Sidebar.Item href="/menu-3">Submenu 2</Sidebar.Item>
            <Sidebar.Item href="/menu-4">Submenu 3</Sidebar.Item>
            <Sidebar.Item href="/menu-5">Submenu 4</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/menu-6" icon={HiOutlineHome}>
            Menu 2
          </Sidebar.Item>
          <Sidebar.Item href="/menu-7" icon={HiOutlineHome}>
            Menu 3
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup label="Group 2">
          <Sidebar.Item href="/menu-8">Menu 1</Sidebar.Item>
          <Sidebar.Item href="/menu-9">Menu 2</Sidebar.Item>
          <Sidebar.Item href="/menu-10">Menu 3</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>

      <Sidebar.CTA>CTA</Sidebar.CTA>
    </Sidebar>
  );
};

export default SidebarDashboard;
