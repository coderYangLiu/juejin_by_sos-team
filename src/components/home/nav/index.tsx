import { memo, useContext } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { Badge, Popover, Tag } from '@arco-design/web-react'
import styles from './index.module.less'
import { useHomeLayout } from '@/hooks/useHomeLayout'
import { appContext } from '@/components/lauout'

export interface IProps {
  active?: number
}

// 菜单栏数据接口
export interface ILowerNavData {
  id: number
  url: string
  nav_name: string
  badge: boolean
  tags: any[]
}

const LowerNav: FC<IProps> = memo((props) => {
  const active = props.active || 0
  const { isUp } = useHomeLayout()
  // context接收-huang
  const context = useContext(appContext)
  // 获取header导航栏数据-huang
  const { nav_lists } = context
  // 排序，默认strapi数据是倒序的-huang
  nav_lists.sort((a, b) => {
    return a.id - b.id
  })

  // const list = [{ // should be get from backend?
  //   id: 0,
  //   name: '综合',
  //   url: '/recommended',
  // }, {
  //   id: 1,
  //   name: '关注',
  //   url: '/following',
  // }, {
  //   id: 2,
  //   name: '后端',
  //   url: '/backend',
  // }, {
  //   id: 3,
  //   name: '前端',
  //   url: '/frontend',
  // }, {
  //   id: 4,
  //   name: 'Android',
  //   url: '/android',
  // }, {
  //   id: 5,
  //   name: 'iOS',
  //   url: '/ios',
  // }, {
  //   id: 6,
  //   name: '人工智能',
  //   url: '/ai',
  // }, {
  //   id: 7,
  //   name: '开发工具',
  //   url: '/freebie',
  // }, {
  //   id: 8,
  //   name: '代码人生',
  //   url: '/career',
  // }, {
  //   id: 9,
  //   name: '阅读',
  //   url: '/article',
  // }]

  return (
    <div className={classNames(styles.lowerNav, isUp ? styles['slide-in'] : styles['slide-out'])}>
      <ul className={styles.navContainer}>
        {nav_lists.map((item) => {
          return (
            <li key={item.id} className={styles.navItem}>
              {item.badge}
              {/* 1.增加徽标，后端有badge字段，true or false --huang */}
              {/* 2.增加卡片，后端有tags字段， --huang */}
              {item.tags.length
                ? <Popover
                  trigger='hover'
                  position='bl'
                  content={
                    <div className={styles.PopoverContent}>
                      {item.tags.map((tag) => {
                        return <Tag className={styles.tags} key={tag.id}>{tag.title}</Tag>
                      })}

                    </div>
                  }
                >
                  <Badge count={item.badge ? 5 : 0} dot offset={[6, -2]}>
                    <Link href={item.url} className={active === item.id ? styles.activeItem : ''}>
                      {item.nav_name}
                    </Link>
                  </Badge>
                </Popover>
                : <Badge count={item.badge ? 5 : 0} dot offset={[6, -2]}>
                  <Link href={item.url} className={active === item.id ? styles.activeItem : ''}>
                    {item.nav_name}
                  </Link>
                </Badge>}

            </li>
          )
        })}
      </ul>
    </div>
  )
})

LowerNav.displayName = 'LowerNav'
export default LowerNav
