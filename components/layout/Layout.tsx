
import React, { useEffect, useState } from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Auth from '../auth/auth'

interface ILayout {
  withoutPaths: string[],
  publicPages: string[]
}

const Layout: React.FC<ILayout> = ({ children, withoutPaths, publicPages }) => {
  const path = window.location.pathname

  const classes = useStyles()

  if (withoutPaths.includes(path)) {
    return <>{children}</>
  }

  if (path.includes('/login')) {
    return (
      <div className={`${classes.layout} main-layout`}>
        {children}
      </div>
    )
  }

  return (
    <Auth publicPages={publicPages} >
      <div className={`${classes.layout} main-layout`}>
        <CssBaseline />
          <div className='main-layout--children'>
            {children}
          </div>
      </div>
    </Auth>
  )
}

export const useStyles = makeStyles({
  layout: {
    minHeight: 'calc(100vh - 370px)',
  }
})

export default Layout
