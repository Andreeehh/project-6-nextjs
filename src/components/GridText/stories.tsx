import { Meta, Story } from '@storybook/react';
import { GridText, GridTextProps } from '.';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridTextProps> = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
