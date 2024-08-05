import { Button, ButtonSize, ButtonTheme, Input } from '@org/foody-shared-components';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form className={styles.container}>
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Email"
        type="text"
        placeholder="Email"
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Password"
        type="password"
        placeholder="Password"
      />
      <Button size={ButtonSize.L} className={styles.btn} theme={ButtonTheme.BG_RED}>
        Login
      </Button>
    </form>
  );
};
