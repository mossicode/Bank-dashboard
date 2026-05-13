import Sidebar from './components/layout/sidebar/Sidebar';
import Topbar from './components/layout/Topbar/Topbar';
import App from './App';
import { useState } from 'react';

export default function Layout() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      {!isSidebar ? (
        <div className='flex bg-gray-100 h-screen '>
          <div className='max-md:hidden bg-white h-screen max-h-screen'>
            <Sidebar />
          </div>
          <div className='w-full overflow-y-scroll'>
            <div>
              <Topbar setIsSidebar={setIsSidebar} />
            </div>
            <div className=''>
              <App />
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full'>
          <Sidebar setIsSidebar={setIsSidebar} />
        </div>
      )}
    </>
  );
}
