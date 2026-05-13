import { useState } from 'react';
import Tab from '../../components/common/tab/Tab';
import ProfileTab from '../../components/profileTab/ProfileTab';
import Security from '../../components/securityTab/SecurityTab';
import PreferenceTab from '../../components/preferenceTab/PreferenceTab';
export default function SettingPage() {
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
  const [activeTab, setActiveTab] = useState('editProfile');
  function renderContent() {
    switch (activeTab) {
      case 'editProfile':
        return <ProfileTab profileData={profileData} />;
      case 'preferences':
        return <PreferenceTab />;
      case 'security':
        return <Security />;
      default:
        return null;
    }
  }
  return (
    <div className='px-10 py-7 max-lg:p-3'>
      <div>
        <div className='bg-white rounded-2.5 px-10 py-6 max-lg:px-3 max-lg:py-2'>
          <div className='flex border-b border-gray-200'>
            <Tab
              label='editProfile'
              active={activeTab === 'editProfile'}
              onClick={() => setActiveTab('editProfile')}
            />
            <Tab
              label='preferences'
              active={activeTab === 'preferences'}
              onClick={() => setActiveTab('preferences')}
            />
            <Tab
              label='security'
              active={activeTab === 'security'}
              onClick={() => setActiveTab('security')}
            />
          </div>

          <div className='mt-4'>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
