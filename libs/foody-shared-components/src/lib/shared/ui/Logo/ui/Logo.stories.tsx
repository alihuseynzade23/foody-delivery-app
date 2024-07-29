import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Logo, LogoProps, LogoTheme } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: StoryFn<LogoProps> = args => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: LogoTheme.PRIMARY,
  className: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: LogoTheme.SECONDARY,
  className: '',
};
