import React, {useState} from 'react'
import AppHeader from '../components/AppHeader';
import SideMenu from '../components/SideMenu';

export default function HomePage() {
    const [inactive, setInactive] = useState(false);
  return (
    <div className='home'>
        <div className='sidBar'>
            <SideMenu
            onCollapse={(inactive) => {
                console.log("AZERTY", inactive);
                setInactive(inactive);
            }}
            />
        </div>

        <div className='headerApp'>   
            <AppHeader />
        </div>
       
        {/* <div className={`container ${inactive ? "inactive" : ""}`}>
        
        </div> */}
    </div>
  )
}
