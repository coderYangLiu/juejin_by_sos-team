import dynamic from 'next/dynamic'

import CColumn from './column'
import CExtension from './extension'
import CPostInfo from './postInfo'
import CRelated from './related'
import CSidePanel from './side-panel'
import CTabBar from './tab-bar'

const CTOC = dynamic(() => import('./toc'))

export namespace PostCpns {
  export const Column = CColumn
  export const Extension = CExtension
  export const PostInfo = CPostInfo
  export const Related = CRelated
  export const Toc = CTOC
  export const SidePanel = CSidePanel
  export const TabBar = CTabBar
}

export default PostCpns
