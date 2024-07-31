import { Meta, StoryFn } from '@storybook/react';

import { LoginPage } from './LoginPage';

import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [ThemeDecorator],
} as Meta;

const Template: StoryFn = args => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
