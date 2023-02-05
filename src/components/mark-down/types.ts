import type { VFile } from 'vfile'
import type { IHighlightKeys, IThemeKeys } from './themes'

export type IFile = VFile & {
  frontmatter: {
    theme?: IThemeKeys
    highlight?: IHighlightKeys
  }
}
