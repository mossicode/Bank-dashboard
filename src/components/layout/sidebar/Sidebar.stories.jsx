import Sidebar from './Sidebar';

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Default() {
  return <Sidebar />;
}
