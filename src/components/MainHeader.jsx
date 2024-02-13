'use client';
import { MenuContext } from '@/context/MenuContext';
import React, { useContext } from 'react';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center p-4">
      <div>GWA</div>
      <FaRegUserCircle size={20} />
    </div>
  );
};

export default MainHeader;
