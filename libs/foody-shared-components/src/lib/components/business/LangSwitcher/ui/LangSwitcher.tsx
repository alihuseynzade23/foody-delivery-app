import { classNames } from '../../../../lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from '../../../ui/Button';

import enIcon from '../../../../assets/en.svg';

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  // Change to our custom toggle function
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'az' : 'en');
  };

  return (
    <img src={enIcon} alt="lang" className={classNames('', {}, [className])} onClick={toggle} />
  );
});
