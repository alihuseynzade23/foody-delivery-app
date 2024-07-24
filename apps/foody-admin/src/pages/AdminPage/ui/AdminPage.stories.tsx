import { Meta, StoryFn } from '@storybook/react';

import { AdminPage } from './AdminPage';

import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'Admin/AdminPage',
  component: AdminPage,
  decorators: [ThemeDecorator],
} as Meta;

const Template: StoryFn = args => <AdminPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
