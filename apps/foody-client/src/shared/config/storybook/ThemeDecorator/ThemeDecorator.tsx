import { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = Story => (
  <div style={{ backgroundColor: '#1E1E30' }}>
    <Story />
  </div>
);
