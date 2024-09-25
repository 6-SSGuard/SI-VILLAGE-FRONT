'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const titleVariants = cva('text-2xl font-bold text-black', {
  variants: {
    variant: {
      default: 'text-primary',
      gray: 'text-gray-500',
      darkGray: 'text-gray-700',
      lightGray: 'text-[#a0a0a0]',
      white: 'text-white',
    },
    size: {
      default: 'text-2xl',
      xxs: 'text-[0.625rem]',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TitleUiProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const TitleUi = React.forwardRef<HTMLHeadingElement, TitleUiProps>(
  ({ level, variant, size, className, children, ...props }, ref) => {
    const Tag = `h${level}` as const;
    return (
      <Tag
        ref={ref}
        className={cn(titleVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

TitleUi.displayName = 'TitleUi';

export { TitleUi, titleVariants };
