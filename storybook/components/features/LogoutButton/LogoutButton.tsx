import React from 'react';
import { styles } from './LogoutButton.styles';

export const LogoutButton = () => {
  return (
    <button
      css={[styles.button]}
      type="button"
    >
      ログアウト
    </button>
  );
};
