import vAxios from '../request'

enum Api {
  homeNav = '/header-navs',
}

export const getTest = () => {
  return vAxios.get({ url: '/test' })
}

export function getHeaderNav() {
  return vAxios.get<any[]>({ url: Api.homeNav })
}
