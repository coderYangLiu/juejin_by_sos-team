import { memo } from 'react'
import { Viewer } from '@bytemd/react'
import bytemdPluginDFM from '@bytemd/plugin-gfm'
import bytemdPluginFrontmatter from '@bytemd/plugin-frontmatter'
import bytemdPluginHighlight from '@bytemd/plugin-highlight-ssr'

import 'bytemd/dist/index.css'
import 'highlight.js/styles/default.css'

import type { FC } from 'react'

import mdTheme from './themes'
import type { IViewerContext } from './types'

export interface IProps {
  value: string
}

const MarkDown: FC<IProps> = memo((props) => {
  const { value } = props

  const plugins = [
    bytemdPluginDFM(),
    bytemdPluginFrontmatter(),
    bytemdPluginHighlight(),
    {
      viewerEffect({ file }: IViewerContext) {
        const { themes, hls } = mdTheme

        const theme = file.frontmatter?.theme ?? 'juejin'
        const highlight = file.frontmatter?.highlight ?? themes[theme].highlight ?? 'default'
        const $style = document.createElement('style')
        const $highlight = document.createElement('style')

        $style.innerHTML = themes[theme].style
        $highlight.innerHTML = hls[highlight]

        document.head.appendChild($style)
        document.head.appendChild($highlight)

        return () => {
          $style.remove()
          $highlight.remove()
        }
      },
    },
  ]

  return (
    <>
      <Viewer value={value} plugins={plugins} />
    </>
  )
})

MarkDown.displayName = 'MarkDown'
export default MarkDown
