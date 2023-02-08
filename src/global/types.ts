export interface IImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

export interface IMate {
  author?: string
  date?: string
  tags: { name: string; link: string }[]
}
