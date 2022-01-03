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
import 'swiper/css/navigation';
import Head from 'next/head'

const getPaths = (paths: string[]) => {
  const newPaths: string[] = []

  paths.map((path: string) => {
    if (path === '/') {
      newPaths.push(path)

      return
    }
    newPaths.push(path)
  })

  return newPaths
}

const publicPages = getPaths(['/', '/login', '/signup'])
const privatePage = getPaths(['/courses/management', '/courses/management/[courseId]'])
const withoutLayoutPaths = getPaths(['/user'])

function myApp({ Component, pageProps, store }: any) {
  return (
    <Provider store={store}>
      <Head>
        <title>GuruAcademy</title>
        <link rel='shortcut icon' href='https://firebasestorage.googleapis.com/v0/b/guru-academy-297d3.appspot.com/o/files%2FLogo.png?alt=media&token=57e9e751-4e63-4475-95d5-79c8ceccfd9f' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <ToastContainer />
          <Header />
          <Layout withoutPaths={withoutLayoutPaths} publicPages={publicPages} privatePage={privatePage}>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </NoSsr>
      </ThemeProvider>
    </Provider>
  )
}

export default withRedux(makeStore)(myApp)
