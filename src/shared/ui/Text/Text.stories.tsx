import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Заголовок',
    text: 'Обычный текст',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Заголовок',
    text: 'Обычный текст',
    themeText: ThemeText.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Заголовок',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Обычный текст',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Заголовок',
    text: 'Обычный текст',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Заголовок',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Обычный текст',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
