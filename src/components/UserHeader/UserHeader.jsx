import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../common/path';
import { Avatar, Dropdown } from 'antd';
import UserIcon from '../Icon/UserIcon';
import LogoutIcon from '../Icon/LogoutIcon';
import { useSelector } from 'react-redux';
import logo from './../../assets/images/logo.png'
import close from './../../assets/images/close.png'
import menu from './../../assets/images/menu.png'

// Menu cho "Sign In" hoặc tài khoản người dùng
const itemsUserMenu = [
  {
    label: (
      <Link className='flex space-x-2 items-center'>
        <UserIcon />
        <span>Thông tin cá nhân</span>
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link className='flex space-x-2 items-center'>
        <LogoutIcon />
        <span>Đăng xuất</span>
      </Link>
    ),
    key: '1',
  },
];

const UserHeader = () => {
  const [sticky, setSticky] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const { infoUser } = useSelector((state) => state.authSlide); // Lấy infoUser từ Redux store

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuMobile((prevState) => !prevState);
  };

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown menu={{ items: itemsUserMenu }} trigger={['click']}>
        <Avatar className='cursor-pointer hover:bg-orange-500 duration-300'>
          {infoUser.user.name.slice(0, 1)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className='py-2 px-4 rounded-md hover:bg-gray-200 duration-300'>
          Sign in
        </Link>
        <Link
          to={path.signUp}
          className='py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white'>
          Join
        </Link>
      </>
    );
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          sticky ? 'dark-nav shadow' : ''
        }`}>
              <div className='container'>
                  <div className='flex items-center justify-between'>
          <Link to={path.homePage}>
            <span className='navbar-brand flex items-center justify-between'>
              <img className='w-10 h-10'
                src={logo}
                alt='Logo'
              />
              <b className='text-white font-bold'> Edusity</b>
            </span>
          </Link>

          <img
            onClick={toggleMenu}
            className='menu-icon'
            src={
              menuMobile
                ? close
                : menu
            }
            alt='Menu Icon'
          />

          <div className={`fullNav ${menuMobile ? '' : 'hide-mobile-menu'}`}>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item active'>
                <Link to={path.homePage} onClick={() => setMenuMobile(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/'} onClick={() => setMenuMobile(false)}>
                  <span>About us</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/'} onClick={() => setMenuMobile(false)}>
                  <span>Program</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/'} onClick={() => setMenuMobile(false)}>
                  <span>Pricing</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/'} onClick={() => setMenuMobile(false)}>
                  <span>Courses</span>
                </Link>
              </li>
            </ul>
            {checkUserLogin()}
                      </div>
                      </div>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
