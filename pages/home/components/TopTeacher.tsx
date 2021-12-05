import React from 'react';

const teachersData = [
  {
    name: 'chien pro',
    des: 'senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/263019341_3247649762146779_6503339813883574591_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jqHwUBC4olwAX-TzqB7&_nc_ht=scontent.fdad3-3.fna&oh=9e0f5fcc71987fe788b0106714db0ab3&oe=61AF914D',
    subject: 'java',
    link: 'https://fb.com/xuan.chien.9022',
  },
  {
    name: 'Do Vu Dung',
    des: 'senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/259303574_955961958376130_8087577361764805871_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yB57i9vkIE4AX8EWjhG&_nc_ht=scontent-hkg4-2.xx&oh=f08106febd658ebaab570ec02dd093c5&oe=61AF7183',
    subject: 'c#',
    link: 'https://fb.com/chippopKiller',
  },
  {
    name: 'Dang Quang Huy',
    des: 'senior fullStack web developer. co-founder GuguAcademy',
    img: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/148397893_1918767138288358_6826919064066293838_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w0RTBv1SS6EAX9jRX8s&_nc_ht=scontent-hkg4-2.xx&oh=c621f60fd2b6d174c48d5ab62640ce0f&oe=61CF1035',
    subject: 'Golang',
    link: 'https://fb.com/huy15399',
  },
];
export const TopTeacher = () => {
  return (
    <div className='topTeacher'>
      <h2 className='topTeacher__header'>Top teachers</h2>
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
              </div>
              <div className='topTeacher__box-img'>
                <img src={item.img} alt='' />
              </div>
            </div>
            <div className='topTeacher__box-labels'>
              <div className='label'>{item.subject}</div>
              <div className='topTeacher__box-linkInfo label'>
                <a href={item.link}>Click to view more information</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
