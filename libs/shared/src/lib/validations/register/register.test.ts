import * as yup from 'yup';
import { registerSchema } from './register';

describe('Register schema', () => {
  let schema: yup.AnyObjectSchema;
  const lang = 'en';

  beforeAll(() => {
    schema = registerSchema(lang);
  });

  test('validates a correct email, password, username and fullname', async () => {
    const validData = {
      email: 'test@example.com',
      password: 'Password1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(validData)).resolves.toBe(validData);
  });

  test('fails validation if email is missing', async () => {
    const invalidData = {
      email: '',
      password: 'Password1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Email address is required');
  });

  test('fails validation if email is invalid', async () => {
    const invalidData = {
      email: 'invalid-email',
      password: 'Password1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Enter a valid email address');
  });

  test('fails validation if password is missing', async () => {
    const invalidData = {
      email: 'invalid-email',
      password: '',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Password is required');
  });

  test('fails validation if password is too short', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'P1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must be at least 5 characters',
    );
  });

  test('fails validation if password lacks uppercase letters', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'password1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one uppercase letter',
    );
  });

  test('fails validation if password lacks lowercase letters', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'PASSWORD1',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };
    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one lowercase letter',
    );
  });

  test('fails validation if password lacks numbers', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'Password',
      userName: 'aliHuseyn',
      fullName: 'John Doe',
    };
    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one number',
    );
  });

  test('fails validation if username is missing', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'Password1',
      userName: '',
      fullName: 'John Doe',
    };
    await expect(schema.validate(invalidData)).rejects.toThrow('User name is required');
  });

  test('fails validation if username is too short', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'Password1',
      userName: 'al',
      fullName: 'John Doe',
    };
    await expect(schema.validate(invalidData)).rejects.toThrow(
      'User name must be at least 5 characters',
    );
  });

  test('fails validation if fullname is missing', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'Password1',
      userName: 'aliHuseyn',
      fullName: '',
    };
    await expect(schema.validate(invalidData)).rejects.toThrow('Full name is required');
  });
});
