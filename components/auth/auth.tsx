import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getJwt } from '../../utils/Auth'
import { GetUserDataThunkAction } from '../../redux/login/thunks'

type Token = string | null | undefined

const Auth: React.FC<{ children: any; publicPages: string[] }> = ({
  children,
}) => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    checkLogin()
    // eslint-disable-next-line
  }, [])

  const checkLogin = async () => {
    try {
      const token: Token = getJwt()

      if (!token) {
        router.replace('/login')

        return
      }
      await Promise.resolve(dispatch(GetUserDataThunkAction(token)))
    } catch (error) {
      localStorage.removeItem('access_token')
      router.replace('/login')

      return
    }
  }

  // const checkAccessUser = () => {
  //   if (publicPages.includes(path)) return
  // }

  return <>{children}</>
}

export default Auth
