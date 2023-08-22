import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
