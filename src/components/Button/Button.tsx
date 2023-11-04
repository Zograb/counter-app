import { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

export const Button: FC<ComponentPropsWithoutRef<'button'>> = ({ className, ...otherProps }) => (
  <button
    className={clsx(
      'h-10 px-6 text-3xl rounded bg-neutral',
      'transition-all duration-200',
      'hover:bg-neutral-hover active:scale-90 active:opacity-80',
      className,
    )}
    {...otherProps}
  />
);
