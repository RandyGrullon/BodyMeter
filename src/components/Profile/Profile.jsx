import React from 'react';
// import { useSelector } from 'react-redux';
// import { authSelector } from '@/app/store/slices/authSlice';

const Profile = () => {
  // const { user } = useSelector(authSelector);

  const user = {
    displayName: 'Jhon Doe',
    email: 'jhondoe@gmail.com'
  }
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Mi Perfil</h1>
      <div className="bg-white p-4 shadow rounded text-black">
        <p><strong>Nombre:</strong> {user.displayName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Puedes añadir más detalles según tu necesidad */}
      </div>
    </div>
  );
};

export default Profile;
