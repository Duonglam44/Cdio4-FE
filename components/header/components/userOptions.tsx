import { useMemo } from 'react'
import { Paper, Button } from '@material-ui/core'
import Link from 'next/link'
import { logout } from 'redux/login/actions'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import router from 'next/router'

export const UserOption = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state: RootStateOrAny) => state.auth?.data)

  const userOptionsMenu = useMemo(() => [
    {
      title: 'Profile',
      path: `/user/${currentUser?._id}`,
      show: true,
    },
    {
      title: 'Courses',
      path: '/courses/management',
      show: currentUser?.role?.id === 2 ? false : true,
    },
    {
      title: 'LiveStreams',
      path: '/user/livestreams',
      show: true,
    },
    {
      title: 'Payment',
      path: '/user/payment',
      show: true,
    },
    {
      title: 'Insights',
      path: '/user/insights',
      show: true,
    },
    {
      title: 'Draft',
      path: '/user/draft',
      show: currentUser?.role?.id === 2 ? false : true,
    },
  ], [currentUser])

  return (
    <Paper elevation={3} className='userOptions'>
      {userOptionsMenu.map((item, index) => (
        item.show && (
          <Button className='userOption' key={index}>
            <Link href={item.path}>{item.title}</Link>
          </Button>)
      ))}
      <Button
        className='userOption'
        style={{ color: '#df2121' }}
        key='logout'
        onClick={(_) => {
          dispatch(logout())
          router.push('/')
        }}
      >
        Logout
      </Button>
    </Paper>
  )
}
