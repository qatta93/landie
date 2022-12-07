import React from 'react';
import cx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

const styles = {
  variant: (
    variant: ButtonProps['variant'],
  ) => {
    if (variant === 'primary') {
      return 'text-white bg-blue-800 hover:bg-blue-900';
    }
    if (variant === 'secondary') {
      return 'text-grey-700 inner-border-2 inner-border-grey-700';
    }
    return 'primary';
  },
  size: (type: ButtonProps['size']) => {
    if (type === 'md') return 'btn-md';
    if (type === 'sm') return 'btn-sm';
    if (type === 'xs') return 'btn-xs';
    return 'md';
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      className,
      onClick,
      children,
      ...rest
    } = props;
    return (
      <button
        ref={ref}
        {...rest}
        type='button'
        onClick={props.onClick}
        className={cx(
          'rounded-sm',
          styles.variant(variant),
          styles.size(size),
          className
        )}
      >
        <>
          {children}
        </>
      </button>
    );
  }
);

export default Button;