import { Meta, Story } from '@storybook/react';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackGround</h1>
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

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
