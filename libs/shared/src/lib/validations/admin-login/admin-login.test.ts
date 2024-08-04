import * as yup from 'yup';
import { AdminLoginSchema } from './admin-login';

describe('AdminLoginSchema', () => {
  let schema: yup.AnyObjectSchema;

  beforeAll(() => {
    schema = AdminLoginSchema();
  });

  test('validates a correct email and password', async () => {
    const validData = {
      email: 'test@example.com',
      password: 'Password1',
    };

    await expect(schema.validate(validData)).resolves.toBe(validData);
  });

  test('fails validation if email is missing', async () => {
    const invalidData = {
      email: '',
      password: 'Password1',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Email address is required');
  });

  test('fails validation if email is invalid', async () => {
    const invalidData = {
      email: 'invalid-email',
      password: 'Password1',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Enter a valid email address');
  });

  test('fails validation if password is missing', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: '',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow('Password must be at least 5 characters');
  });

  test('fails validation if password is too short', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'P1',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must be at least 5 characters',
    );
  });

  test('fails validation if password lacks uppercase letters', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'password1',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one uppercase letter',
    );
  });

  test('fails validation if password lacks lowercase letters', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'PASSWORD1',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one lowercase letter',
    );
  });

  test('fails validation if password lacks numbers', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'Password',
    };

    await expect(schema.validate(invalidData)).rejects.toThrow(
      'Password must contain at least one number',
    );
  });
});
