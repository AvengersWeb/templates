import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingBasket } from 'react-icons/fa';

import logo from '../assets/logo-dark.webp';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState(pathname);
  const [open, setIsOpen] = useState(false);

  const { total, language, setLanguage } = useAuth();

  const languageHandler = () => {
    if (language === 'en') {
      setLanguage('bn');
    } else {
      setLanguage('en');
    }
  };

  const navData = [
    {
      text: 'Home',
      textBn: 'হোম',
      link: '/',
    },
    {
      text: 'Shop',
      textBn: 'শপ',
      link: '/shop',
    },
    {
      text: 'Blog',
      textBn: 'ব্লগ',
      link: '/blog',
    },
    {
      text: 'Contact Us',
      textBn: 'যোগাযোগ',
      link: '/contact',
    },
  ];

  return (
    <div className="bg-white shadow w-full text-4xl py-3 font-secondary fixed top-0 z-[11111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3">
          {/* nav */}
          {/* desktop navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-x-6 text-base uppercase">
              {navData.map((item, i) => (
                <Link
                  to={item.link}
                  onClick={() => setActive(item.link)}
                  className={`${active === item.link && 'font-bold'}`}
                  key={i}
                >
                  <li>{language === 'en' ? item.text : item.textBn}</li>
                </Link>
              ))}
            </ul>
          </div>
          {/* mobile navigation hamburger menu */}
          <div className="flex items-center lg:hidden">
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </div>
          </div>
          {/* logo */}
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="max-w-[100px]" />
          </div>
          {/* cart */}
          <div className="flex justify-end items-center gap-x-4">
            <Link
              to="/cart"
              className="text-xl flex gap-1 items-center hover:text-sky-700 duration-500 whitespace-nowrap"
            >
              <p className="text-base font-bold">${total}</p>
              <FaShoppingBasket />
            </Link>
            <p
              className="text-base font-bold cursor-pointer uppercase"
              onClick={languageHandler}
            >
              {language}
            </p>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } block lg:hidden transition duration-200 absolute h-screen w-screen bg-white top-0 left-0 z-50`}
      >
        <div
          className="absolute top-4 right-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-col gap-y-4 text-xl uppercase text-center">
            {navData.map((item, i) => (
              <Link
                to={item.link}
                onClick={() => setActive(item.link)}
                className={`${active === item.link && 'font-bold'}`}
                key={i}
              >
                <li>{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoMdNotifications } from 'react-icons/io';

// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const { pathname } = useLocation();

//   const [active, setActive] = useState(pathname);
//   const [accountActive, setAccountActive] = useState(false);
//   const [open, setIsOpen] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(true);

//   const navData = [
//     {
//       text: 'Home',
//       link: '/',
//     },
//     {
//       text: 'Meals',
//       link: '/meals',
//     },
//     {
//       text: 'Upcoming Meals',
//       link: '/upcoming-meals',
//     },
//     {
//       text: 'Contact Us',
//       link: '/contact',
//     },
//   ];

//   const subMenuIndicator = (type) => {
//     if (type === 'user') {
//       setIsOpen(false);
//       setAccountActive(() => !accountActive);
//     } else {
//       setAccountActive(false);
//       setIsOpen(() => !open);
//     }
//   };

//   return (
//     <div className="bg-white shadow w-full text-4xl relative py-3 font-secondary">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* nav */}
//           {/* logo */}
//           <div className="flex justify-center items-center">
//             <img src={logo} alt="" className="max-w-[100px]" />
//           </div>
//           <div className="flex flex-row-reverse lg:flex-row items-center justify-center md:gap-x-12">
//             {/* desktop navigation */}
//             <div className="hidden lg:flex items-center">
//               <ul className="flex gap-x-6 text-base uppercase">
//                 {navData.map((item, i) => (
//                   <Link
//                     to={item.link}
//                     onClick={() => setActive(item.link)}
//                     className={`${active === item.link && 'font-bold'}`}
//                     key={i}
//                   >
//                     <li>{item.text}</li>
//                   </Link>
//                 ))}
//               </ul>
//             </div>
//             {/* hamburger menu */}
//             <div className="flex items-center relative lg:hidden">
//               <div
//                 className="cursor-pointer"
//                 onClick={() => subMenuIndicator('hamburger')}
//               >
//                 {open ? <FaTimes /> : <GiHamburgerMenu />}
//               </div>
//               {/* mobile navigation */}
//               {open && (
//                 <div className="w-[150px] absolute top-[122%] right-0 text-base bg-white black-shadow p-3">
//                   <ul className="flex flex-col gap-y-3">
//                     {navData.map((item, i) => (
//                       <li key={i}>
//                         <Link to={item.link} className="hover:text-blue-500">
//                           {item.text}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* cart */}
//             <div className="flex justify-end items-center gap-x-6">
//               <Link
//                 to="/dashboard"
//                 className="text-xl flex gap-1 items-center hover:text-sky-700 duration-500"
//               >
//                 <IoMdNotifications size={25} />
//               </Link>

//               {userLoggedIn ? (
//                 <div className="text-xl flex gap-1 items-center hover:text-sky-700 duration-500 relative">
//                   <img
//                     src=""
//                     alt=""
//                     width={25}
//                     height={25}
//                     className="object-cover rounded-full cursor-pointer"
//                     onClick={() => subMenuIndicator('user')}
//                   />
//                   {accountActive && (
//                     <div className="w-[150px] absolute top-[122%] right-0 text-base bg-white black-shadow p-3">
//                       <ul className="flex flex-col gap-y-3">
//                         <li>UserName</li>
//                         <li>
//                           <Link to="/dashboard" className="hover:text-blue-500">
//                             Dashboard
//                           </Link>
//                         </li>
//                         <li>
//                           <button className="text-sm bg-black text-white py-2 px-6 rounded-full">
//                             Logout
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button className="bg-black text-white !text-sm uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded cursor-pointer">
//                   Join Us
//                 </button>
//               )}
//               <Link
//                 to="/cart"
//                 className="text-xl flex gap-1 items-center hover:text-sky-700 duration-500 whitespace-nowrap"
//               ></Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
