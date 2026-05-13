import SettingPage from './SettingPage';

export default {
  title: 'pages/setting-page',
  component: SettingPage,
};
const profileData = [
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
export function Default() {
  return <SettingPage profileData={profileData} />;
}
