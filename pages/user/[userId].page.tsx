import { useEffect, useMemo } from 'react'
import { Grid, createStyles, makeStyles } from '@material-ui/core'
import { UserSideBar } from './components/UserSideBar'
import { UserPageContext } from './components/UserPageContext'
import { GetUser } from '../../redux/user/thunks'
import router from 'next/router'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { UserIdLoading } from './components/loading/UserIdLoading'

const UserPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const thisUserData = useSelector(
    (state: RootStateOrAny) => state.user.userData
  )
  const loading = useSelector((state: RootStateOrAny) => state.user.loading)
  const authLoading = useSelector((state: RootStateOrAny) => state.auth.loading)
  const currentUserId = useSelector((state: RootStateOrAny) => state.auth._id)
  const isCurrentUser = useMemo(
    () => (currentUserId === thisUserData?._id ? true : false),
    [thisUserData, currentUserId]
  )

  useEffect(() => {
    dispatch(GetUser(router.query?.userId as string))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query?.userId])

  if (loading || authLoading) return <UserIdLoading />

  // if(!thisUserData) return router.push('/')

  return (
    <div className={classes.wrap}>
      <div className='container'>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <UserSideBar />
          </Grid>
          <Grid item md={9}>
            <UserPageContext />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {
      padding: '30px 0',
      background: '#f1f1f1',
      minHeight: 'calc(100vh - 370px)',
    },
  })
)

export default UserPage
