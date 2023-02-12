import vAxios from '..'
import { localApis } from '../config'
import type { IHomeNav, IMainNav } from './types'

// 获取文章列表
export function getArticles(params?: any) {
  return vAxios.get<any[]>({ url: `${localApis.articles}?populate=*`, params })
}

// 根据ID获取文章详情
export function getArticleById(id: number) {
  return vAxios.get({ url: `${localApis.articles}/${id}` })
}

// 根据ID获取作者详情
export function getAuthorById(id: number) {
  return vAxios.get({ url: `${localApis.authors}/${id}` })
}

// 获取首页数据
export function getHomeData() {
  return vAxios.get({ url: localApis.homeData })
}

// 获取首页导航
export function getHomeNavs() {
  return vAxios.get<IHomeNav[]>({ url: localApis.homeNavs })
}
// 根据ID获取首页导航
export function getHomeNavById(id: number) {
  return vAxios.get<IHomeNav>({ url: `${localApis.homeNavs}/${id}` })
}

// 获取主导航
export function getMainNavs() {
  return vAxios.get<IMainNav[]>({ url: localApis.mainNavs })
}

// 获取文章详情页数据
export function getPostData() {
  return vAxios.get({ url: localApis.postData })
}
