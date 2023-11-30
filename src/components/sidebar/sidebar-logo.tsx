'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

export type SidebarLogoProps = ComponentProps<typeof Link> & {
  img: string | StaticImageData;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
};

export const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt,
  imgWidth = 24,
  imgHeight = 24,
  ...props
}): JSX.Element => {
  return (
    <Link
      href={href}
      className={cn('mb-5 flex items-center pl-2.5', className)}
      {...props}
    >
      <Image
        src={img}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className="mr-3 w-6 h-6 sm:w-7 sm:h-7"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {children}
      </span>
    </Link>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
