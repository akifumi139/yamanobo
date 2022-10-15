import React from 'react';
import { styles } from './LogoutButton.styles';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const LogoutButton = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={[styles.button]}
      type="button"
      className='logout-button'
      {...props}
    >
      {label}
    </button>
  );
};
