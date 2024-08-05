import React, { InputHTMLAttributes, memo, useRef, useState } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import styles from './Input.module.scss';
import { error } from 'console';
import { FormFieldError } from '../../FormFieldError/ui/FormFieldError';
import eyeIcon from '../../../assets/eye-icon.svg'
import eyeIconSlash from '../../../assets/eye-slash.svg'

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
  disabled?: boolean;
  label?: string;
  theme?: InputTheme;
  type?: 'text' | 'password';
  placeholder?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
  eye?: 'true' | 'false';
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
    disabled,
    autofocus,
    eye= false,
    ...otherProps
  } = props;

  const [showPassword, setShowpassword] = useState(false)
  const ref = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setShowpassword(prevState => !prevState);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.error]: !!error,
  };
  const isEyeVisible = eye === 'true'; 
  return (
    <div className={classNames(styles.InputWrapper, {}, [inputWrapperClassName])}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(styles.Input, mods, [inputClassName])}
        {...otherProps}
      />
    {isEyeVisible && (
          <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            <img src={showPassword ? eyeIconSlash : eyeIcon} alt="Toggle Password Visibility" width={20}/>
          </span>
        )}
      {error && <FormFieldError error={error} />}
    </div>
  );
});
