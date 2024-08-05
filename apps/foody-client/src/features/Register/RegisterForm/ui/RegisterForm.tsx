import { Button, ButtonSize, ButtonTheme, Input } from '@org/foody-shared-components';
import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  return (
    <form className={styles.container}>
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Full Name"
        type="text"
        placeholder="Full Name"
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Username"
        type="text"
        placeholder="Username"
      />
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
        Register
      </Button>
    </form>
  );
};
