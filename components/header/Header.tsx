import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { getCategories } from '../../redux/global/thunks'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { UserOption } from './components/userOptions'
import { getJwt } from 'utils/Auth'
import { defaultAvatar } from '../../configs/constants'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const [isShowOption, setIsShowOption] = useState<boolean>(false)
  const user = useSelector((state: RootStateOrAny) => state.auth.data)

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
              <img src='/assets/images/Logo.png' alt='logo Guru Academy' />
            </Link>
          </div>
          <div className='header__menu'>
            {headerItems.map((item, index) => (
              <div key={index} className='header__menu-item'>
                <div key={index} className='header__menu-link'>
                  <Link href={`${item.path}`}>{item.title}</Link>
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
                    e.stopPropagation()
                    setIsShowOption(!isShowOption)
                    window.addEventListener('click', () => {
                      setIsShowOption(false)
                    })
                  }}
                >
                  <div className='header__avatar'>
                    <img src={user?.imageUrl || defaultAvatar} alt='' />
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
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
  {
    title: 'About',
    path: '/about',
  },
]
