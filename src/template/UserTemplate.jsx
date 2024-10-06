import React from 'react'
import UserHeader from '../components/UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';

const UserTemplate = () => {
  return (
      <>
          {/* header */}
          <UserHeader />
          {/* main */}
          <main>
              <Outlet/>
          </main>
          {/* footer */}
      </>
  )
}

export default UserTemplate;