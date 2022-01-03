import { Grid } from '@material-ui/core'
import Link from 'next/link'

export const AdsCard = () => {
  return (
    <div className='trending-wrap'>
      <Grid container spacing={6} justifyContent='center' className='trending'>
        <Grid container spacing={2} item lg={7}>
          {cardContext.map((item, index) => (
            <Grid item lg={6} key={index}>
              <Link href='/card' passHref={true}>
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
          lg={5}
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
    </div>
  )
}

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
]
