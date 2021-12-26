import React from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../redux/store'
import { Provider } from 'react-redux'
import { NoSsr, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme'
import Layout from '../components/layout/Layout'
import '../styles/sass/index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import 'swiper/css'

const getPaths = (paths: string[]) => {
  const newPaths: string[] = []

  paths.map((path) => {
    if (path === '/') {
      newPaths.push(path)

      return
    }
    newPaths.push(path)
  })

  return newPaths
}

const publicPages = getPaths(['/', '/login', '/signup'])
const withoutLayoutPaths = getPaths([])

function myApp({ Component, pageProps, store }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <ToastContainer />
          <Header />
          <Layout withoutPaths={withoutLayoutPaths} publicPages={publicPages}>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </NoSsr>
      </ThemeProvider>
    </Provider>
  )
}

export default withRedux(makeStore)(myApp)
