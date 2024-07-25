import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LangSwitcher, LangSwitcherProps } from './LangSwitcher';

export default {
  title: 'Components/LangSwitcher',
  component: LangSwitcher,
} as Meta;

const Template: StoryFn<LangSwitcherProps> = args => <LangSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
};
