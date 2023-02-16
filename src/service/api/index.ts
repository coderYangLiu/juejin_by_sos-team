import qs from 'qs'
import vAxios from '..'
import { localApis } from '../config'
import type { IArticle, IAuthor, IHomeNav, IMainNav, IPostData } from './types'

// 获取文章列表
export function getArticles(payload?: any) {
  const query = qs.stringify(
    {
      populate: '*',
      fields: ['title', 'image', 'desc', 'createdAt', 'type'],
      ...payload,
    },
    { encodeValuesOnly: true },
  )
  return vAxios.get<IArticle[]>({ url: `${localApis.articles}?${query}` })
}

// 根据ID获取文章详情
export function getArticleById(id: number) {
  const query = qs.stringify(
    {
      // populate: '*',
      populate: {
        author: {
          populate: ['info', 'count'],
        },
        article_tags: '*',
        info: '*',
      },
    },
    { encodeValuesOnly: true },
  )
  return vAxios.get({ url: `${localApis.articles}/${id}?${query}` })
}

// 根据ID获取作者详情
export function getAuthorById(id: number) {
  return vAxios.get<IAuthor>({ url: `${localApis.authors}/${id}` })
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
export function getPostData(payload?: any) {
  const query = qs.stringify(
    {
      populate: {
        banners: '*',
        articles: {
          fields: ['title'],
          populate: ['info', 'count'],
        },
      },
      ...payload,
    },
    { encodeValuesOnly: true },
  )
  console.log(query)
  return vAxios.get<IPostData>({ url: `${localApis.postData}?${query}` })
}
