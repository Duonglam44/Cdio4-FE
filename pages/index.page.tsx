import type { NextPage } from 'next';
import { Banner } from './home/components/Banner';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { TopTeacher } from './home/components/TopTeacher';
import { KeepUpToUpdate } from './home/components/KeepUpToUpdate';
import { ShareSkill } from './home/components/ShareSkill';

const cardContext = [
  {
    title: 'JavaScript',
    totalCourse: 1,
    image: '../../assets/images/icons8-html-5.png',
  },
  {
    title: 'CSS',
    totalCourse: 11,
    image: '../../assets/images/icons8-css3.png',
  },
  {
    title: 'HTML',
    totalCourse: 11,
    image: '../../assets/images/icons8-javascript.png',
  },
  {
    title: 'Python',
    totalCourse: 11,
    image: '../../assets/images/icons8-python.png',
  },
];
const Home: NextPage = () => {
  // console.log(cartContext);
  return (
    <div className='home'>
      <Banner />
      <Grid container spacing={2} justifyContent='center' className='trending'>
        <Grid container item lg={6} spacing={1.5}>
          {cardContext.map((item, index) => (
            <Grid item lg={6} key={index}>
              <Link href='/card'>
                <div className='trending__card'>
                  <div className='trending__card-context'>
                    <div className='mb-4'>
                      <h3 className='m-0 p-0'>{item.title}</h3>
                      <p className='m-0 p-0'>
                        {`${item.totalCourse} course${
                          item.totalCourse > 1 ? 's' : ''
                        }`}
                      </p>
                    </div>
                    <button className='button trending__card-button'>
                      take a look
                    </button>
                  </div>
                  <div className='trending__card-img'>
                    <img src={item.image} alt='' />
                  </div>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          lg={4}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='trending__content mt-lg-0 mt-5'>
            <h2>Trending technology</h2>
            <div className='trending__content-ads'>
              <p>Popular topics to learn now</p>
              <div className='trending__content-ads-img'>
                <img src='../../assets/images/trendingTopic.png' alt='' />
              </div>
            </div>
            <p className='trending__content-des'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              maiores quasi, sapiente quae natus vel eum eaque quis molestias
              voluptatem!
            </p>
            <Link href='/viewIndex'>
              <a className='trending__link'>View the index</a>
            </Link>
          </div>
        </Grid>
      </Grid>
      <TopTeacher />
      <KeepUpToUpdate />
      <ShareSkill />
    </div>
  );
};

export default Home;
