import React from 'react';
import './logoutButton.css';

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
      type="button"
      className='logout-button'
      {...props}
    >
      {label}
    </button>
  );
};
