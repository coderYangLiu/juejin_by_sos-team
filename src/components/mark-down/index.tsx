import { memo } from 'react'
import { Viewer } from '@bytemd/react'
import bytemdPluginDFM from '@bytemd/plugin-gfm'
import bytemdPluginFrontmatter from '@bytemd/plugin-frontmatter'
import bytemdPluginHighlight from '@bytemd/plugin-highlight-ssr'

import { h } from 'hastscript'

import 'bytemd/dist/index.css'
import 'highlight.js/styles/default.css'

import type { FC } from 'react'

import type { Root } from 'hast'
import mdTheme from './themes'
import type { IFile } from './types'

export interface IProps {
  content: string
}

const MarkDown: FC<IProps> = memo((props) => {
  const { content } = props

  const plugins = [
    bytemdPluginDFM(),
    bytemdPluginFrontmatter(),
    bytemdPluginHighlight(),
    {
      rehype: (p: any) =>
        p.use(() => (tree: Root, file: IFile) => {
          const { themes, hls } = mdTheme

          const theme = file.frontmatter?.theme ?? 'juejin'
          const highlight = file.frontmatter?.highlight ?? themes[theme].highlight ?? 'default'

          tree.children.unshift(h('style', `${themes[theme].style} ${hls[highlight]}`))
        }),
    },
  ]

  return (
    <Viewer value={content} plugins={plugins} />
  )
})

MarkDown.displayName = 'MarkDown'
export default MarkDown
