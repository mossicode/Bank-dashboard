import { HomeIcon } from '../../icons';
import Button from './Button';

const meta = {
  title: 'Components/Common/Button',
  component: Button,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const Default = {
  args: {
    children: 'Default Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const IconButton = {
  args: {
    className: 'hover:text-sky-500',
    children: <HomeIcon />,
  },
};
