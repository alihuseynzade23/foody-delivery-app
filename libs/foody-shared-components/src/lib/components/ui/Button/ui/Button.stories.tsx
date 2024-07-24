import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps, ButtonTheme, ButtonSize } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  theme: ButtonTheme.CLEAR,
  size: ButtonSize.M,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  theme: ButtonTheme.BG_VIOLET,
  size: ButtonSize.M,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  theme: ButtonTheme.BG_VIOLET,
  size: ButtonSize.XL,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  theme: ButtonTheme.BG_VIOLET,
  size: ButtonSize.S,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  theme: ButtonTheme.BG_GRAY,
  size: ButtonSize.M,
  disabled: true,
};

export const Square = Template.bind({});
Square.args = {
  children: 'Square Button',
  theme: ButtonTheme.BG_RED,
  size: ButtonSize.M,
  square: true,
};

export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  theme: ButtonTheme.BG_GREEN,
  size: ButtonSize.M,
};
