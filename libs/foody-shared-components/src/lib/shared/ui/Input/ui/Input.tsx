import React, { InputHTMLAttributes, memo, useRef } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import styles from './Input.module.scss';
import { error } from 'console';
import { FormFieldError } from '../../FormFieldError/ui/FormFieldError';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputTheme {
  BG_WHITE = 'bgWhite',
  BG_ADMIN = 'bgAdmin',
  BG_CLIENT = 'bgClient',
}

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  label?: string;
  theme?: InputTheme;
  type?: 'text' | 'password';
  placeholder?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    inputWrapperClassName,
    inputClassName,
    value,
    error,
    onChange,
    label,
    theme = InputTheme.BG_WHITE,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const mods: Mods = {
    [styles[theme]]: true,
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [inputWrapperClassName])}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(styles.Input, mods, [inputClassName])}
        {...otherProps}
      />
      {error && <FormFieldError error={error} />}
    </div>
  );
});
