import React from 'react';
import Link from 'next/link';

export const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__content'>
          <h1 className='banner__header'>
            Build better
            <br />
            Learn Better
          </h1>
          <Link href='plan'>
            <a className='banner__button'>view plan</a>
          </Link>
          <div className='banner__intro'>
            GuruAcademy
            <p>#GuruAcademy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
