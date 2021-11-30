import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from 'react-icons/ai'
import { Grid } from '@material-ui/core'
import Link from 'next/link'

export const Footer = () => {
  const authPath = ['/login', '/signin']

  if (authPath.includes(window.location.pathname)) return <></>

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <Grid container spacing={3} style={{ marginRight: '0!important' }}>
            {footerContent.map((row, idx) => (
              <Grid sm={6} md={3} lg={3} key={idx}>
                <div className='footer__col'>
                  <h2 className='footer__col-header'>{row?.title}</h2>
                  <div className='footer__col-menu'>
                    {row?.menu &&
                      row.menu.map((sub, subIdx) => {
                        return (
                          <div className='footer__col-menu-text' key={subIdx}>
                            <a href={`${sub.path}`}>{sub?.content}</a>
                            {sub.img && (
                              <a>
                                <img
                                  src={sub.img}
                                  alt='contact'
                                  className='footer__col-menu-img'
                                />
                              </a>
                            )}
                          </div>
                        )
                      })}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <p className='footer-bottom-inc' style={{ marginLeft: 0 }}>
            @GuruAcademy, Inc, 2021
          </p>
          <div
            className='footer_subMenu'
            style={{ flex: 1, marginLeft: '30px' }}
          >
            <div className='footer-bottom-link'>
              <Link href='/'>Help</Link>
            </div>
            <div className='footer-bottom-link'>
              <Link href='/'>Privacy</Link>
            </div>
            <div className='footer-bottom-link'>
              <Link href='/'>Terms</Link>
            </div>
          </div>
          <div className='footer_subMenu'>
            <div className='nav-link social-link'>
              <Link href='https://fb.com' passHref={true}>
                <AiOutlineFacebook />
              </Link>
            </div>
            <div className='nav-link social-link'>
              <Link href='https://fb.com' passHref={true}>
                <AiFillTwitterSquare />
              </Link>
            </div>
            <div className='nav-link social-link'>
              <Link href='https://fb.com' passHref={true}>
                <AiFillGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const footerContent = [
  {
    title: 'GuguAcademy',
    menu: [
      {
        content: 'About',
        path: '/about',
      },
      {
        content: 'Careers',
        path: '/careers',
      },
      {
        content: 'Blogs',
        path: '/blogs',
      },
      {
        content: 'Parnership',
        path: '/parnership',
      },
    ],
  },
  {
    title: 'Community',
    menu: [
      {
        content: 'About',
        path: '/about',
      },
      {
        content: 'Careers',
        path: '/careers',
      },
      {
        content: 'Blogs',
        path: '/blogs',
      },
      {
        content: 'Parnership',
        path: '/parnership',
      },
    ],
  },
  {
    title: 'Teaching',
    menu: [
      {
        content: 'Become a teacher',
        path: '/',
      },
      {
        content: 'Teaching in GuruAcademy',
        path: '/',
      },
    ],
  },
  {
    title: 'Contact',
    menu: [
      {
        img: './assets/images/apple.png',
      },
      {
        img: './assets/images/ggplay.png',
      },
    ],
  },
]
