import React from 'react';
import '../../../styles/index.scss';

import '@fontsource/montserrat';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/mukta';
import '@fontsource/mukta/400.css';
import '@fontsource/mukta/500.css';
import '@fontsource/mukta/600.css';
import '@fontsource/mukta/700.css';
import '@fontsource/mukta/800.css';

type GlobalStylesProps = {
  children: React.ReactNode;
};

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return <>{children}</>;
};
