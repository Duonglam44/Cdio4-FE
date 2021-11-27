import axios, { Method } from 'axios'
import { getJwt } from '.././utils/Auth'

interface ApiDataType {
  path?: string
  method: Method
  params?: object
  data?: object
  headers?: { [key: string]: string }
  errorHandler?: (error: any) => void
  needThrowError?: boolean
}

const handleThrowError = (
  error: any,
  errorHandler: any,
  needThrowError: any
) => {
  if (needThrowError) {
    throw error
  }

  if (errorHandler && typeof errorHandler === 'function') {
    errorHandler(error)
  }

  return
}

export const api = async ({
  path,
  method,
  params,
  headers,
  errorHandler,
  data,
  needThrowError = true,
}: ApiDataType) => {
  const token = getJwt()
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const paramsAxios = {
    method,
    params,
    data,
    url: `https://guru-academy-api.herokuapp.com/api/v1${path}`,
    headers: headers || {
      'Content-Type': 'application/json',
    },
  }

  return new Promise((resolve) => {
    axios(paramsAxios)
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        handleThrowError(
          error.response.data.message,
          errorHandler,
          needThrowError
        )
      })
  })
}
