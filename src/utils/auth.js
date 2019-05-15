import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserInfo = 'User-Infomation'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserInfo(userInfo) {
  console.log(userInfo)
  return Cookies.set(UserInfo, userInfo)
}

export function getUserInfo() {
  let userInfo = Cookies.get(UserInfo)
  return userInfo ? JSON.parse(userInfo) : {}
}

export function removeUserInfo() {
  return Cookies.remove(UserInfo)
}
