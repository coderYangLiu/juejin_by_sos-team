import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Button, Card } from '@arco-design/web-react'
import styles from './index.module.less'

import { HomeFooter,Register,Download } from './cpns'
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
          {/* 直接在这个文件夹下写 或者 传组件进来*/}
            <Register/>
            <Download/>
      <div className="wrapper">
        <div>
          <span>component-layout-home</span>
          {/* {
          navData?.map(item => (
            <span key={item.id}> {item.title} </span>
          ))
        } */}
        </div>

        <div className={styles.main}>
          <div className={styles.left}>{children}</div>

          <div className={styles.right}>
            {/* 直接在这个文件夹下写 或者 传组件进来 */}
            component-layout-home <br />
            <Card hoverable bordered={false} >
              Card content <Button type='outline'>More</Button>
            </Card>
            right 组件 <br />
            right 组件 <br />
            right 组件 <br />
            right 组件 <br />

            <HomeFooter/>{/*公司地址，网安备份号等 */}
            <HomeFooter />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
})

HomeLayout.displayName = 'HomeLayout'
export default HomeLayout
