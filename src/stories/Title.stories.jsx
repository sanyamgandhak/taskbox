import React from 'react';

import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'blue',
    label:'ChatApp',
    padding:'5px'
  };
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: 'green',
    label:'ChatApp',
    padding:'10px'
  };