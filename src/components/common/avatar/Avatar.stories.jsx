import Avatar from './Avatar';

export default {
  title: 'Components/Common/Avatar',
  component: Avatar,
  args: {
    src: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    alt: 'Ashley Parker',
  },
};

export const Default = {};

export const Small = {
  args: {
    variation: 'small',
  },
};

export const Large = {
  args: {
    variation: 'large',
  },
};
