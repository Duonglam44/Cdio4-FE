import React from 'react';

const teachersData = [
  {
    name: 'Xuan Chien K58',
    des: 'senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/269914350_3271491716429250_4183426382528319230_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=A0i2HyQr5XkAX8xvGgC&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-G1oWdt9fIXqSN-V_Md29qZ5jKnDB7Ml_hB4UHvBy6xQ&oe=61D5E1C4',
    subject: 'ReactJs',
    link: 'https://fb.com/xuan.chien.9022',
  },
  {
    name: 'Do Vu Dung',
    des: 'senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/p200x200/195153611_860134581292202_6728294779933579060_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=hoESsb0a3JEAX-vW4yN&_nc_ht=scontent.fdad3-4.fna&oh=00_AT89QXz8MLJMOVQkPkl61hMSiXxA4bS6wyk7eRJEyfnhzA&oe=61F66807',
    subject: 'JavaScript, Python',
    link: 'https://fb.com/chippopKiller',
  },
  {
    name: 'Dang Quang Huy',
    des: 'senior fullStack web developer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/148397893_1918767138288358_6826919064066293838_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1QQ4LtfePEoAX_cs67T&tn=jKb2njUD874y0rv_&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8qh3i_rqgz5FzGo_7YUt3MoUrbBKKO48BInUEpUlDLjA&oe=61F69D35',
    subject: 'Fullstack js',
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
