import { classNames, Mods } from '../../../lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputTheme {
  BG_WHITE = 'bgWhite',
  BG_ADMIN = 'bgAdmin',
  BG_CLIENT = 'bgClient',
}

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
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
    onChange,
    label,
    theme = InputTheme.BG_WHITE,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  // const [isFocused, setIsFocused] = useState(false);
  // const [caretPosition, setCaretPosition] = useState(0);

  // useEffect(() => {
  //   if (autofocus) {
  //     setIsFocused(true);
  //     ref.current?.focus();
  //   }
  // }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    // setCaretPosition(e.target.value.length);
  };

  // const onBlur = () => {
  //   setIsFocused(false);
  // };

  // const onFocus = () => {
  //   setIsFocused(true);
  // };

  // const onSelect = (e: any) => {
  //   setCaretPosition(e?.target?.selectionStart || 0);
  // };

  const mods: Mods = {
    [styles[theme]]: true,
    // [styles.square]: square,
    // [styles[size]]: true,
    // [styles.disabled]: disabled,
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [inputWrapperClassName])}>
      {label && <label className={styles.label}>{`${label}>`}</label>}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(styles.Input, mods, [inputClassName])}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSelect={onSelect}
        {...otherProps}
      />
    </div>
  );
});
