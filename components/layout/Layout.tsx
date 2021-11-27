
import React, { useEffect, useState } from 'react'
import { CssBaseline } from '@material-ui/core'
import Auth from '../auth/auth'

interface ILayout {
  withoutPaths: string[],
  publicPages: string[]
}

const Layout: React.FC<ILayout> = ({ children, withoutPaths, publicPages }) => {
  const path = window.location.pathname

  if (withoutPaths.includes(path)) {
    return <>{children}</>
  }

  if (path.includes('/login')) {
    return (
      <div className='main-layout'>
        {children}
      </div>
    )
  }

  return (
    <Auth publicPages={publicPages} >
      <div className='main-layout'>
        <CssBaseline />
          <div className='main-layout--children'>
            {children}
          </div>
      </div>
    </Auth>
  )
}

export default Layout
