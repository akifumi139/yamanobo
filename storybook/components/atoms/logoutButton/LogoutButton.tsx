import React from 'react';
import './logoutButton.css';

import { ButtonProps } from './types/LogoutButton.types';

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
