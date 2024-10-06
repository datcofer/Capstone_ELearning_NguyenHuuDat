import React from 'react'
import pageNotFoundAnimation from './../../assets/Animation/pageNotFoundAnimation.json'
import { useLottie } from 'lottie-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    const options = {
        animationData: pageNotFoundAnimation,
        loop: true
    };
    const { View } = useLottie(options);
    return (
      <div>
      <div className='w-full'>
          {View}
            </div>
            <Link to={path.homePage} className='mt-3 text-blue-600 inline-block hover:underline'>Bấm vào để quay về trang chủ</Link>
            </div>
  )
}

export default PageNotFound;