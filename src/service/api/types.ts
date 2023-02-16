export interface IMainNav {
  id: number
  name: string
  path: string
  tag?: string
  order: number
  types: string
}

export interface IHomeNav {
  id: number
  name: string
  path: string
  badge: boolean
  subNav?: ISubNav[]
}
interface ISubNav {
  id: number
  order: number
  name: string
  path: string
  type: string
  tag?: string
}

/**
 * @Article
 */
export interface IArticle {
  id: number
  title: string
  content: string
  image?: string
  desc: string
  createdAt: string
  type: 'article' | 'ad'
  author: IAuthor
  info: IArticleInfo
  article_tags: IArticletag[]
}
export interface IArticletag {
  id: number
  name: string
  path?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
export interface IArticleInfo {
  id: number
  view: number
  comment: number
  like: number
}
/**
 * @IAuthor
 */
export type IAuthor = IBaseAuthor & {
  count: ICount
  info: IAuthorInfo
}
interface IBaseAuthor {
  id: number
  name: string
  href: string
  avatar: string
  position?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
interface IAuthorInfo {
  id: number
  rank: string
  jueyouLevel: string
}
interface ICount {
  id: number
  following: number
  followers: number
  zan: number
  view: number
  jp: number
}

interface Banner {
  id: number
  url: string
  alt?: any
  width: number
  height: number
  closable: boolean
}

export interface IPostData {
  banners: Banner[]
  articles: IArticle[]
}
