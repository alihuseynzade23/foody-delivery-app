import React, { FC } from 'react';

type InputProps = {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  admin?: boolean;
  client?: boolean;
};

export const Input: FC<InputProps> = props => {
  const { className, placeholder, onChange, label, admin, client } = props;
  return <div>Input</div>;
};
