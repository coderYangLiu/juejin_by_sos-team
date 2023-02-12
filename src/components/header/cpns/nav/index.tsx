import { memo, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Trigger } from '@arco-design/web-react'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'
import Image from 'next/image'
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

  console.log(router.asPath)

  return (
    <>
      <div className={styles.listContainer}>
        {/* <NavList /> */}

        <ul className={styles.navContainer}>
          {
            mainNav.map(item => (
              <li className={styles.navItem} key={item.id}>
                <Link href={item.path} className={ item.path === router.asPath ? styles.activeText : styles.navText } >
                  {item.types === 'img' ? <Image src={item.name} alt="" width={115} height={40} /> : item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <Trigger
        popupVisible={listOpen}
        trigger="click"
        popup={() => (
          <ul className={styles.navContainer}>
            {
              mainNav.map(item => (
                <li className={styles.navItem} key={item.id}>
                  <Link href={item.path} className={ item.path === router.asPath ? styles.activeText : styles.navText } >
                    {item.types === 'img' ? <Image src={item.name} alt="" width={115} height={40} /> : item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        )}
        onClickOutside={() => setListOpen(false)}
      >
        <div className={styles.navPhone} onClick={() => setListOpen(!listOpen)}>
          <span>{list[active]}</span>
          <span
            className={`${styles.navArrow} ${
              listOpen ? styles.navArrowReversed : ''
            }`}
          ></span>
        </div>
      </Trigger>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
