import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useContextState } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';


const NavButton = ({ title, customFunction, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter" >
      <button type="button" onClick={customFunction}
        style={{ color }}
        className="relative rounded-full p-3 hover:bg-light-gray text-xl">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
          {icon}
      </button>
    </TooltipComponent>
  )
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useContextState();
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      console.log(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [screenSize]);
  
  // console.log(screenSize);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
      alert('Please use a laptop or desktop to use this app');
    }
    else {
      setActiveMenu(true);
    }
  }
    , [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* <div className="flex justify-between p-2 md:mx-6 relative"> */}
        <NavButton title="Menu" color="blue" icon={<AiOutlineMenu />} customFunction={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} />
      {/* </div> */}
      <div className='flex'>
        <NavButton
          title="Cart"
          color="blue"
          icon={<FiShoppingCart />}
          customFunction={() => handleClick('cart')}
        />
        <NavButton
          title="Chat"
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
          customFunction={() => handleClick('chat')}
        />
        <NavButton
          title="Notification"
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
          customFunction={() => handleClick('notification')}
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}>
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full h-8 w-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Joel</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar