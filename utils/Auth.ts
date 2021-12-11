import jwtDecode from 'jwt-decode'
const tokenKey = 'Guru-auth'

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getJwt() {
  try {
    const token = localStorage.getItem(tokenKey)
    const decodeToken = jwtDecode(token!)
    if (!decodeToken) return

    return token
  } catch (error) {
    localStorage.removeItem(tokenKey)
  }
}
