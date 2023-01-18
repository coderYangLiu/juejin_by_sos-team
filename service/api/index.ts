import vAxios from '../request'

export const getTest = () => {
  return vAxios.get({ url: '/test' })
}
