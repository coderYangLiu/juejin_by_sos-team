import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import style from './index.module.less'

import { HomeFooter } from './cpns'
import BaseLayout from '@/components/lauout'

export interface IProps {
  children?: ReactElement
}

const HomeLayout: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <BaseLayout>
      <div className='wrapper'>
      <div>
        <span>component-layout-home</span>
        {/* {
          navData?.map(item => (
            <span key={item.id}> {item.title} </span>
          ))
        } */}
      </div>

        <div className={style.main}>
          <div className={style.left}>{ children }</div>

          <div className={style.right}>
          {/* 直接在这个文件夹下写 或者 传组件进来 */}
            component-layout-home <br />
            right 组件 <br />
            right 组件 <br />
            right 组件 <br />
            right 组件 <br />

            <HomeFooter/>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
})

HomeLayout.displayName = 'HomeLayout'
export default HomeLayout
