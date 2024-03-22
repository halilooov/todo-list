import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { loadConfigFromFile } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  async viteFinal(config) {
    return {
      ...config,
      plugins: config.plugins?.filter(
        // @ts-ignore
        (plugin) => plugin.name !== 'vite-plugin-eslint'
      ),
    }
  },
}

export default config
