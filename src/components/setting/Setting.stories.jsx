import Setting from './Setting';

const data = [
  {
    label: 'Your Name',
    placeholder: 'Charlene Reed',
    type: 'text',
  },
  {
    label: 'User Name',
    placeholder: 'Charlene Reed',
    type: 'text',
  },
  {
    label: 'Email',
    placeholder: 'charlenereed@gmail.com',
    type: 'email',
  },
  {
    label: 'Password',
    placeholder: '********',
    type: 'password',
  },
  {
    label: 'Date of Birth',
    placeholder: '25 January 1990',
    type: 'date',
  },
  {
    label: 'Present Address',
    placeholder: 'San Jose, California, USA',
    type: 'text',
  },
  {
    label: 'Permanent Address',
    placeholder: 'San Jose, California, USA',
    type: 'text',
  },
  {
    label: 'City',
    placeholder: 'San Jose',
    type: 'text',
  },
  {
    label: 'Postal Code',
    placeholder: '45962',
    type: 'number',
  },
  {
    label: 'Country',
    placeholder: 'USA',
    type: 'text',
  },
];

const preference = [
  {
    label: 'currency',
    placeholder: 'USD',
    type: 'number',
  },
  {
    label: 'Time Zone',
    placeholder: '(GMT-12:00) International Date Line West',
    type: 'text',
  },
];

export default {
  title: 'components/Setting',
  component: Setting,
  args: {
    labels: ['Edit Profile', 'Preference', 'Security'],
    profileData: data,
    preferenceData: preference,
  },
};

export function Default(args) {
  return <Setting {...args} className='w-full' />;
}
