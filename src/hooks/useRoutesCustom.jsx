import React from 'react'
import { useRoutes } from 'react-router-dom';
import { path } from '../common/path';
import UserTemplate from '../template/UserTemplate';

const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.homePage,
            element:<UserTemplate/>
        }
    ])
  return (
    routes
  )
}

export default useRoutesCustom;