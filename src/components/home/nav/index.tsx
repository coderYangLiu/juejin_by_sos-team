import { memo } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './index.module.less'
import { useHomeLayout } from '@/hooks/useHomeLayout'

export interface IProps {
  active?: number
}

const LowerNav: FC<IProps> = memo((props) => {
  const { active = 0 } = props

  const { isUp } = useHomeLayout()
  const list = [
    {
      // should be get from backend?
      id: 0,
      name: '综合',
      url: '/recommended',
    },
    {
      id: 1,
      name: '关注',
      url: '/following',
    },
    {
      id: 2,
      name: '后端',
      url: '/backend',
    },
    {
      id: 3,
      name: '前端',
      url: '/frontend',
    },
    {
      id: 4,
      name: 'Android',
      url: '/android',
    },
    {
      id: 5,
      name: 'iOS',
      url: '/ios',
    },
    {
      id: 6,
      name: '人工智能',
      url: '/ai',
    },
    {
      id: 7,
      name: '开发工具',
      url: '/freebie',
    },
    {
      id: 8,
      name: '代码人生',
      url: '/career',
    },
    {
      id: 9,
      name: '阅读',
      url: '/article',
    },
  ]

  return (
    <div className={classNames({ [styles.top]: !isUp }, styles.wrapper)}>
      <div className={styles.lowerNav}>
        <ul className={styles.navContainer}>
          {list.map((item) => {
            return (
              <li key={item.id} className={styles.navItem}>
                <Link href={item.url} className={active === item.id ? styles.activeItem : ''}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <a>标签管理</a>
      </div>
    </div>
  )
})

LowerNav.displayName = 'LowerNav'
export default LowerNav
