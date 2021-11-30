import { Paper, Button } from '@material-ui/core'
import Link from 'next/link'
import { logout } from 'redux/login/actions'
import { useDispatch } from 'react-redux'

export const UserOption = () => {
  const dispatch = useDispatch()

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
        }}
      >
        Logout
      </Button>
    </Paper>
  )
}

const userOptionsMenu = [
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'Course',
    path: '/user/course',
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
]
