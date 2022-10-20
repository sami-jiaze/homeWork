// 存储token
export const setToken = (token) => {
  localStorage.setItem('Access-Token', token)
}
// 获取token
export const getToken = () => {
  return localStorage.getItem('Access-Token')
}
// 清除token
export const removeToken = () => {
  localStorage.removeItem('Access-Token')
}
