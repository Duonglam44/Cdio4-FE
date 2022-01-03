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
    },
    {
      title: 'Course',
      path: '/courses/management',
    },
    {
      title: 'LiveStreams',
      path: '/user/livestreams',
    },
    {
      title: 'Payment',
      path: '/user/payment',
    },
    {
      title: 'Insights',
      path: '/user/insights',
    },
    {
      title: 'Draft',
      path: '/user/draft',
    },
  ], [currentUser])

  return (
    <Paper elevation={3} className='userOptions'>
      {userOptionsMenu.map((item, index) => (
        <Button className='userOption' key={index}>
          <Link href={item.path}>{item.title}</Link>
        </Button>
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
