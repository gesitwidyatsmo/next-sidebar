'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import MainHeader from './MainHeader';

import { AiOutlineHome, AiOutlineFire, AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { TiArrowUpOutline } from 'react-icons/ti';
import { FaAngleRight, FaAngleDown, FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { MenuContext } from '@/context/MenuContext';

const menuItems = [
  { href: '/', icon: <AiOutlineHome />, text: 'Home' },
  { href: '/populer', icon: <AiOutlineFire />, text: 'Populer' },
  { href: '/upcomming', icon: <TiArrowUpOutline />, text: 'Up Comming' },
  { href: '/top-rated', icon: <AiOutlineStar />, text: 'Top Rated' },
  {
    // href: '#',
    href: '/setting',
    icon: <AiOutlineSetting />,
    text: 'Setting',
    subMenu: [
      { href: '/user', text: 'User' },
      { href: '/about', text: 'About' },
    ],
  },
];

const MainLayout = ({ children }) => {
  const { open, toggle } = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);

  const subMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start ">
        <aside className={`bg-white rounded h-[calc(100vh-4rem)] overflow-hidden transition-all duration-300 ${open ? 'w-60 p-4' : 'w-16 p-4'} relative`}>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>
                  <div className={`flex justify-start items-center gap-2 hover:bg-blue-200 rounded-xl transition-all duration-300 ${open ? 'p-2' : 'p-2'}`}>
                    {item.icon}
                    {open && <h3 className="flex-1">{item.text}</h3>}
                    {/* {open && (item.subMenu ? <FaAngleRight /> : '')} */}
                  </div>
                </Link>
                {/* {item.subMenu && (
                  <ul className="ml-6">
                    {item.subMenu.map((subItem, i) => (
                      <li key={i}>
                        <Link href={subItem.href}>
                          <div className="flex justify-start items-center gap-2 hover:bg-blue-200 rounded-xl p-2">
                            <span>{subItem.text}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 right-0 mb-4 mr-5 cursor-pointer" onClick={toggle}>
            {!open ? <FaChevronCircleRight size={24} /> : <FaChevronCircleLeft size={24} />}
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
