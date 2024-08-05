import { memo } from 'react';
import { classNames, Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import styles from './SidebarItem.module.scss';
import { Link } from 'react-router-dom';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  isActive: boolean;
}

export const SidebarItem = memo(({ item, isActive }: SidebarItemProps) => {
  return (
    <Link to={item.path} className={classNames(styles.item)}>
      <Text
        className={classNames(styles.link, { [styles.activeText]: isActive })}
        size={TextSize.XL}
        weight={TextWeight.NORMAL}
        theme={TextTheme.CLEAR}
      >
        {item.text}
      </Text>
    </Link>
  );
});
