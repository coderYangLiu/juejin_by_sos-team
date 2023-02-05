import { memo, useContext, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Trigger } from '@arco-design/web-react'
import styles from './index.module.less'
import { appContext } from '@/components/lauout'

export interface IHeaderNavProps {
  active: number
}

// 导航栏数据接口
export interface IHeaderNavData {
  id: number
  path: string
  title: string
}

const HeaderNav: FC<IHeaderNavProps> = memo((props) => {
  // context接收-huang
  const context = useContext(appContext)
  // 获取header导航栏数据-huang
  const { header_navs } = context
  // 排序，默认strapi数据是倒序的-huang
  header_navs.sort((a, b) => {
    return a.id - b.id
  })

  const active = props.active || 0
  // const list = ['首页', '沸点', '课程', '直播', '活动', '竞赛']

  const [listOpen, setListOpen] = useState(false)
  function NavList() {
    return (
      <ul className={styles.navContainer}>
        {
          // 遍历数据-huang
          header_navs.map((item) => {
            return (<li className={styles.navItem} key={item.id}>
              <Link href={item.path} className={active === item.id - 1 ? styles.activeText : styles.navText}>
                {item.title}
              </Link>
            </li>)
          })
        }

      </ul>
    )
  }
  return (
    <>
      <div className={styles.listContainer}>
        <NavList />
      </div>
      <Trigger popupVisible={listOpen} trigger='click' popup={() => <NavList />} onClickOutside={() => setListOpen(false)}>
        <div className={styles.navPhone} onClick={() => setListOpen(!listOpen)}>
          <span>{header_navs[active].title}</span>
          <span className={`${styles.navArrow} ${listOpen ? styles.navArrowReversed : ''}`}></span>
        </div>
      </Trigger>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
