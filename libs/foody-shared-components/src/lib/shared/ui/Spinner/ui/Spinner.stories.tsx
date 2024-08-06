import { Meta, StoryFn } from '@storybook/react';
import { Loader } from './Spinner';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as Meta<typeof Loader>;
