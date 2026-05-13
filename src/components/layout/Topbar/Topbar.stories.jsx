import Topbar from './Topbar';

export default {
  title: 'Components/Layout/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template({ args }) {
  return <Topbar {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
