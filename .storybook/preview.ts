import type { Preview, WebComponentsRenderer } from "@storybook/web-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from '../custom-elements.json'

setCustomElementsManifest(customElements)

import '../src/themes/light.css'
import '../src/themes/dark.css'

const preview: Preview = {
        decorators: [
                withThemeByClassName<WebComponentsRenderer>({
                        themes: {
                                light: 'qwack-light-theme',
                                dark: 'qwack-dark-theme'
                        },
                        defaultTheme: 'light'
                })
        ],
        parameters: {
                controls: {
                        matchers: {
                                color: /(background|color)$/i,
                                date: /Date$/i,
                        },
                },
        },
};

export default preview;
