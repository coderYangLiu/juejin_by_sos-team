export const DEFAULT_TIMEOUT = 1000 * 5

export enum localApis {
  articles = '/articles',
  // articleTags = '/article-tags',
  authors = '/authors',
  homeData = '/home-data',
  homeNavs = '/home-navs',
  mainNavs = '/main-navs',
  postData = '/post-data',
}

export const local = {
  baseURL: 'https://juejincms.mrly.top/api',
  timeout: DEFAULT_TIMEOUT,
}
