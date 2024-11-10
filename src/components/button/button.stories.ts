import type { Args, Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit';
import { spread } from '@open-wc/lit-helpers';

import './button.ts'

const meta: Meta = {
        title: "Atoms/Button",
        component: "q-button",
        args: {
                label: "Button"
        },
}

export default meta;

export const Default: StoryObj = {
        args: {
                size: "small",
                primary: false,
                disabled: false
        },
        argTypes: {
                size: {
                        control: "select",
                        options: ["small", "regular", "large"],
                }
        }
}

export const IconSuffix: StoryObj = {
        args: {
                suffix: "arrow-right",
                size: "small",
                primary: false,
                disabled: false
        },
        argTypes: {
                size: {
                        control: "select",
                        options: ["small", "regular", "large"],
                }
        }
}
