import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx/Navbar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
      </footer>
    </>
  );
};

export default RootLayout;
