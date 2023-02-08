import { memo } from 'react'
import type { FC } from 'react'

import { Icon } from '@arco-design/web-react'
const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/c/font_3885475_xzt8yz5og8.js' })

const MyIcon: FC<any> = memo((props) => {
  return <IconFont style={{ fontSize: 16 }} {...props} />
})

MyIcon.displayName = 'MyIcon'
export default MyIcon
