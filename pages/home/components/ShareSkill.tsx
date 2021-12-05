import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
const commentList = [
  {
    title: '@dovudung',
    name: 'Do Vu Dung',
    des: 'this is amazing courses for every one who loves IT, bla bla bloa bloa bloe ple ple ple pla bla bla bloa bloa bloe ple ple ple pla',
    icon: '../../../assets/images/iconcmt1.png',
  },
  {
    title: '@dqhuy',
    name: 'Dang Quang Huy',
    des: 'this is amazing courses for every one who loves IT',
    icon: '../../../assets/images/iconcmt1.png',
  },
  {
    title: '@dxchien',
    name: 'Dang Xuan Chien',
    des: 'this is amazing courses for every one who loves IT',
    icon: '../../../assets/images/iconcmt1.png',
  },
];
export const ShareSkill = () => {
  return (
    <div className='share-skill'>
      <Grid container>
        <Grid container item lg direction='column' alignItems='center'>
          <p className='share-skill__title'>follow us</p>
          <h2 className='share-skill__header'>Share Your Skill</h2>
        </Grid>
        <Grid container item spacing={2} justifyContent='center'>
          {commentList.map((item, index) => (
            <Grid item lg={3.5} key={index}>
              <div className='share-skill__card'>
                <div className='share-skill__card-title d-flex justify-content-flex-start'>
                  <div className='share-skill__card-img'>
                    <img src={item.icon} alt='' />
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-flex-start'>
                    <Link href='/profile'>
                      <a className='share-skill__card-title'>{item.title}</a>
                    </Link>
                    <p>{item.name}</p>
                  </div>
                </div>
                <p className='share-skill__card-des'>{item.des}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
