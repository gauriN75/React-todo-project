import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utlis/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, type, variant, ...rest }) {
  return (
    <button
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, ...rest }) {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
