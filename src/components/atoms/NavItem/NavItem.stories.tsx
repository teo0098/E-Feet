import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavItem from './NavItem';

export default {
  title: 'atoms/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Normal link',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  children: 'Custom styles link',
  styles: { color: 'red' },
};
