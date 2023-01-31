import { memo, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Trigger } from '@arco-design/web-react'
import styles from './nav.module.less'

export interface IProps {
  active: number
}

const HeaderNav: FC<IProps> = memo((props) => {
  const active = props.active || 0
  const list = ['首页', '沸点', '课程', '直播', '活动', '竞赛']
  const [listOpen, setListOpen] = useState(false)
  function NavList() {
    return (
      <ul className={styles.navContainer}>
        <li className={styles.navItem}>
          <Link href={'/'} className={active === 0 ? styles.activeText : styles.navText}>
            首页
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/pins'} className={active === 1 ? styles.activeText : styles.navText}>
            沸点
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/course'} className={active === 2 ? styles.activeText : styles.navText}>
            课程
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/live'} className={active === 3 ? styles.activeText : styles.navText}>
            直播
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/events/all'} className={active === 4 ? styles.activeText : styles.navText}>
            活动
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/challenge'} className={active === 5 ? styles.activeText : styles.navText}>
            竞赛
          </Link>
        </li>
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
          <span>{list[active]}</span>
          <span className={`${styles.navArrow} ${listOpen ? styles.navArrowReversed : ''}`}></span>
        </div>
      </Trigger>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
