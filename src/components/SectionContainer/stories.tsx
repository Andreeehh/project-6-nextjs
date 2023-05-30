import React from 'react';
import { SectionContainer, SectionContainerProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus natus explicabo eius fugiat, consequuntur
          ea illum nobis commodi architecto nisi, iure placeat eligendi tempora qui. Magni tenetur eos itaque nisi!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
