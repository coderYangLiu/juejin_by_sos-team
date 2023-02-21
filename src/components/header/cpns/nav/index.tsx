import { memo, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Trigger } from '@arco-design/web-react'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './index.module.less'
import type { AppState } from '@/store'

export interface IProps {
  active: number
}

const HeaderNav: FC<IProps> = memo((props) => {
  const active = props.active || 0
  const list = ['首页', '沸点', '课程', '直播', '活动', '竞赛']
  const [listOpen, setListOpen] = useState(false)

  const { mainNav } = useSelector((store: AppState) => ({
    mainNav: store.main.mainNav,
  }))

  const router = useRouter()

  const NavItem
    = <ul className={styles.navContainer}>
      {
        mainNav.map(item => (
          <li className={ classNames(styles.navItem, { [styles.noborder]: item.types !== 'nav' }) } key={item.id}>
            <Link href={item.path} className={ item.path === router.pathname ? styles.activeText : styles.navText } >
              {item.types === 'img' ? <Image src={item.name} priority alt="" width={115} height={40} /> : item.name}
              {item.tag && <div className={styles.tag}>{item.tag}</div>}
            </Link>
          </li>
        ))
      }
    </ul>

  return (
    <>
      <div className={styles.listContainer}>
        {/* <NavList /> */}
        {NavItem}
      </div>

      <Trigger
        popupVisible={listOpen}
        trigger="click"
        popup={() => (NavItem)}
        onClickOutside={() => setListOpen(false)}
      >
        <div className={styles.navPhone} onClick={() => setListOpen(!listOpen)}>
          <span>{list[active]}</span>
          <span className={ classNames(styles.navArrow, { [styles.navArrowReversed]: listOpen }) } />
        </div>
      </Trigger>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
