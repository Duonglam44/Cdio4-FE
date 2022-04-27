import React from 'react';

const teachersData = [
  {
    name: 'Chien Xuan Dang',
    des: 'Senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/275175732_3318540441724377_3024668989242226176_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9v2UKiMg_hMAX_o16-c&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_trX5rE_n3mzLvmkc8EiIOlDJjxyhvbuil7sYbYKNZ8Q&oe=626CFB40',
    subject: 'ReactJs',
    link: 'https://fb.com/xuan.chien.9022',
  },
  {
    name: 'Dung Do Vu',
    des: 'Senior front-end engineer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/277798502_1030336560938669_2799791749077267699_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=gU-UAxggEgAAX-jEx-c&_nc_ht=scontent.fdad3-3.fna&oh=00_AT8BnP5fZVxMMq7-q0Wa4GPSJJzVPWj3B0eBWHkm2qqSWA&oe=626D1265',
    subject: 'JavaScript, Python',
    link: 'https://fb.com/chippopKiller',
  },
  {
    name: 'Huy Quang Dang',
    des: 'Senior fullStack web developer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/148397893_1918767138288358_6826919064066293838_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=MT7N733fyx4AX8t6GVv&_nc_ht=scontent.fdad3-3.fna&oh=00_AT-g4Mq6N1XUBRfa_4WFRjz57Z8jw4f98Z5GSfVINgH14Q&oe=628CE835',
    subject: 'Fullstack js',
    link: 'https://fb.com/huy15399',
  },
  {
    name: 'Lam Le Quang Duong',
    des: 'Senior fullStack web developer. co-founder GuguAcademy',
    img: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/67779598_903148730044722_3435980992215515136_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=QMVOhKT0O-EAX_lja2X&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_wKiwaoshN-ugjRsIGyuMqeRmuF5kCQkWVmVTT2s-0mQ&oe=628C6282',
    subject: 'Fullstack js',
    link: 'https://fb.com/huy15399',
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
