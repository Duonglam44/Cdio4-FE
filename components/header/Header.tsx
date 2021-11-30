import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { getCategories } from '../../redux/global/thunks'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { UserOption } from './components/userOptions'
import { getJwt } from 'utils/Auth'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const [isShowOption, setIsShowOption] = useState<boolean>(false)
  const global = useSelector((state: RootStateOrAny) => state.globalReducer)

  headerItems[0]?.subItems?.push(...(global?.categories as []))
  window.onscroll = () => {
    const headerElement = document.getElementById('header')
    const isStickyHeader =
      window.pageYOffset > Number(headerElement?.offsetTop) + 300 ? true : false
    if (isStickyHeader) {
      headerElement?.classList.add('header--sticky')

      return
    }
    headerElement?.classList.remove('header--sticky')
  }

  const token = getJwt()

  const authPath = ['/login', '/signin']

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  if (authPath.includes(window.location.pathname)) return <></>

  return (
    <>
      <div className='header' id='header'>
        <div className='container header__container'>
          <div className='header__img-wrapper'>
            <Link href='/' passHref={true}>
              <img src='./assets/images/Logo.png' alt='logo Guru Academy' />
            </Link>
          </div>
          <div className='header__menu'>
            {headerItems.map((item, index) => (
              <div key={index} className='header__menu-item'>
                <div key={index} className='header__menu-link'>
                  <Link href={`${item.path}`}>{item.title}</Link>
                  <div
                    className='nav-link-menu'
                    style={{ display: `${item.subItems ?? 'none'}` }}
                  >
                    {/* {item.subItems?.map((item, index) => (
                      <Link to={item.path} className='nav-link-sub' key={index}>
                        {item.title}
                      </Link>
                    ))} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='header__search'>
            <button className='button header__search-button'>
              <BiSearch />
            </button>
            {!token ? (
              <div className='header__menu-link'>
                <Link href='/login'>Sign in</Link>
              </div>
            ) : (
              <>
                <button className='button header__search-button'>
                  <BsBell />
                </button>
                <div
                  className='header__avatar-wrap'
                  onClick={(e) => {
                    setIsShowOption(!isShowOption)
                  }}
                >
                  <div className='header__avatar'>
                    <img
                      src='https://images.unsplash.com/photo-1638074645949-0f1383f6ccee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80'
                      alt=''
                    />
                  </div>
                  {isShowOption && <UserOption />}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const headerItems = [
  {
    title: 'Category',
    path: '/category',
    subItems: [],
  },
  {
    title: 'Course',
    path: '/courses',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
  {
    title: 'Forums',
    path: '/forums',
  },
]
