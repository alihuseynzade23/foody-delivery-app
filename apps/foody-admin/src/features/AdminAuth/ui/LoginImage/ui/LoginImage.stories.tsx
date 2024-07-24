import { Meta, StoryFn } from '@storybook/react';

import { LoginImage } from './LoginImage';

export default {
  title: 'AdminLogin/LoginImage',
  component: LoginImage,
} as Meta;

const Template: StoryFn = args => <LoginImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
