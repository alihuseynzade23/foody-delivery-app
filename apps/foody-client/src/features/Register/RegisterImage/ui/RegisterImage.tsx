import registerIcon from '../../../../shared/assets/user-register.svg';

import styles from './RegisterImage.module.scss';

export const RegisterImage = () => {
  return (
    <div className={styles.container}>
      <img src={registerIcon} alt="login" />
    </div>
  );
};
