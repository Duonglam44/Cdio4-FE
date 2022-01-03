
import React, { useEffect, useState } from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Auth from '../auth/auth'

interface ILayout {
  withoutPaths: string[],
  publicPages: string[]
  privatePage: string[]
}

const Layout: React.FC<ILayout> = ({ children, withoutPaths, publicPages }) => {
  const path = window.location.pathname

  const classes = useStyles()

  if (withoutPaths.includes(path)) {
    return <>{children}</>
  }

  if (publicPages.includes(path)) {
    return (
      <div className={`${classes.layout}`}>
        {children}
    </div>
    )
  }

  return (
    <Auth publicPages={publicPages}>
      <div className={`${classes.layout}`}>
        <CssBaseline />
          <div className={classes.mainLayoutChild}>
            {children}
          </div>
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
  }
})

export default Layout
