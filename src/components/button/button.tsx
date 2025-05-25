import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button.variants';
type ButtonProps = {
  size: 'small' | 'medium' | 'large';
} & ComponentProps<'button'> &
  ButtonVariants;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
