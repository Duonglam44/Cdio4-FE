import React from 'react';

const teachersData = [
  {
    name: 'Chien Xuan Dang',
    des: 'Front-end developer. Co-founder GuguAcademy.',
    company: 'Hitachi Vantara Viet Nam',
    img: '../../../assets/images/avatarChien.jpg',
    subject: 'ReactJs',
    link: 'https://fb.com/xuan.chien.9022',
  },
  {
    name: 'Dung Do Vu',
    des: 'Back-end developer. Co-founder GuguAcademy',
    company: 'Data House',
    img: '../../../assets/images/avatarDung.jpg',
    subject: 'JavaScript, Python',
    link: 'https://fb.com/chippopKiller',
  },
  {
    name: 'Huy Quang Dang',
    des: 'FullStack web developer. Co-founder GuguAcademy',
    company: 'Data House',
    img: '../../../assets/images/avatarHuy.png',
    subject: 'Fullstack',
    link: 'https://fb.com/huy15399',
  },
  {
    name: 'Lam Le Quang Duong',
    des: 'FullStack web developer. co-founder GuguAcademy',
    company: 'Nal Solutions',
    img: '../../../assets/images/avatarLam.jpg',
    subject: 'Fullstack',
    link: 'https://www.facebook.com/Duonglam44',
  },
];
export const TopTeacher = () => {
  return (
    <div className='topTeacher'>
      <h2 className='topTeacher__header'>Top Teachers</h2>
      <div>
        {teachersData.map((item, index) => (
          <div
            className={`topTeacher__box-wrap topTeacher__box--${
              index % 2 === 0 ? 'right' : 'left'
            }`}
            key={index}
          >
            <div className='topTeacher__box'>
              <div className='topTeacher__box-content'>
                <p className='topTeacher__box-content-title'>{item.name}</p>
                <p className='topTeacher__box-content-des'>{item.des}</p>
                <p className='topTeacher__box-content-des'>{`Work at: ${item.company}`}</p>
              </div>
              <div className='topTeacher__box-img'>
                <img src={item.img} alt='' />
              </div>
            </div>
            <div className='topTeacher__box-labels'>
              <div className='label'>{item.subject}</div>
              <div className='topTeacher__box-linkInfo label'>
                <a href={item.link} target='_blank' rel='noreferrer'>Click to view more information</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
