import { Meta, StoryFn } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'AdminLogin/LoginForm',
  component: LoginForm,
  //   decorators: [ThemeDecorator],
} as Meta;

const Template: StoryFn = args => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
