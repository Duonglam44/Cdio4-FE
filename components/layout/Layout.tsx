import React, { useEffect } from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Auth from '../auth/auth'
import { GetUserDataThunkAction } from '../../redux/login/thunks'
import { getJwt } from '../../utils/Auth'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

interface ILayout {
  withoutPaths: string[]
  publicPages: string[]
  privatePage: string[]
}

const Layout: React.FC<ILayout> = ({ children, withoutPaths, publicPages }) => {
  const path = window.location.pathname
  const dispatch = useDispatch()
  const user = useSelector((state: RootStateOrAny) => state.auth.data)

  const classes = useStyles()
  const token = getJwt()

  useEffect(() => {
    if (!token) return
    dispatch(GetUserDataThunkAction(token as string))
  }, [])

  if (withoutPaths.includes(path)) {
    return <>{children}</>
  }

  if (publicPages.includes(path)) {
    return <div className={`${classes.layout}`}>{children}</div>
  }

  return (
    <Auth publicPages={publicPages}>
      <div className={`${classes.layout}`}>
        <CssBaseline />
        <div className={classes.mainLayoutChild}>{children}</div>
      </div>
    </Auth>
  )
}

export const useStyles = makeStyles({
  layout: {
    height: '100%',
    width: '100%',
  },
  mainLayoutChild: {
    height: '100%',
    minHeight: 'calc(100vh - 370px)',
  },
})

export default Layout
