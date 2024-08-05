import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps, InputTheme } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter text...',
  theme: InputTheme.BG_WHITE,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: '',
  label: 'Username',
  placeholder: 'Enter username...',
  theme: InputTheme.BG_WHITE,
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  type: 'password',
  placeholder: 'Enter password...',
  theme: InputTheme.BG_WHITE,
};

export const Autofocus = Template.bind({});
Autofocus.args = {
  value: '',
  placeholder: 'Autofocus input...',
  theme: InputTheme.BG_WHITE,
  autofocus: true,
};

export const AdminTheme = Template.bind({});
AdminTheme.args = {
  value: '',
  placeholder: 'Admin input...',
  theme: InputTheme.BG_ADMIN,
};
