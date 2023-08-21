import React from 'react';
// import { useSelector } from 'react-redux';
// import { authSelector } from '@/app/store/slices/authSlice';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  // const { isAuth } = useSelector(authSelector);
  const isAuth = true;
  const router = useRouter();

  if (!isAuth) {
    router.push('/login');
    return null;
  }

  return children;
};

export default ProtectedRoute;
