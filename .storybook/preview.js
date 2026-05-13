import '../src/index.css';
import { ContainerDecorator } from './decorators';
/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ContainerDecorator],
};

export default preview;
