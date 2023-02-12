export interface IMainNav {
  id: number
  name?: string
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

export interface ISubNav {
  id: number
  order: number
  name: string
  path: string
  type: string
  tag?: any
}
