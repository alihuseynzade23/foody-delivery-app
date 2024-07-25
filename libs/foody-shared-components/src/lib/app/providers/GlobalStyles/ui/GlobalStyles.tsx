import React from 'react';
import '../../../styles/index.scss';

type GlobalStylesProps = {
  children: React.ReactNode;
};
export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return <>{children}</>;
};
