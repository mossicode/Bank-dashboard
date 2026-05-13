import { useState } from 'react';
import Card from '../common/card/Card';
import Tab from '../common/tab/Tab';
import ProfileTab from '../profileTab/ProfileTab';
import { cn } from '../../utils/common';
import PreferenceTab from '../preferenceTab/PreferenceTab';
import SecurityTab from '../securityTab/SecurityTab';

export default function Setting({
  labels,
  profileData,
  preferenceData,
  className,
}) {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(i) {
    setToggleState(i);
  }
  return (
    <Card
      className={cn(
        'xl:gap-14 xl:py-10 xl:px-6 md:gap-6  md:py-8  gap-5 flex flex-col ',
        className
      )}
    >
      {/* tabs */}
      <Tab toggleTab={toggleTab} toggleState={toggleState} labels={labels} />
      {/* contents */}

      <div className=''>
        <div className={`${toggleState === 1 ? 'flex' : 'hidden'}`}>
          <ProfileTab profileData={profileData} />
        </div>
        <div className={`${toggleState === 2 ? 'flex' : 'hidden'}`}>
          <PreferenceTab preferenceData={preferenceData} />
        </div>
        <div className={`${toggleState === 3 ? 'flex' : 'hidden'}`}>
          <SecurityTab />
        </div>
      </div>
    </Card>
  );
}
