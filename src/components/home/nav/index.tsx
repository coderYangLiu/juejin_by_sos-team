import { memo, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Badge } from '@arco-design/web-react'
import classNames from 'classnames'
import styles from './index.module.less'
import { useLayout } from '@/hooks/useLayout'

export interface IProps {
  list?: Array<{
    id: number
    name: string
    url: string
    badge: number
    children?: Array<{ name: string; url: string }>
  }>
}

const LowerNav: FC<IProps> = memo((props) => {
  const {
    list = [
      {
        id: 0, // a key to distinguish the items
        name: '综合', // the name to be displayed on the screen
        url: '/', // the url of the link
        badge: 0, // if it is above zero, a dot badge will be displayed
      },
      {
        id: 1,
        name: '关注',
        url: '/',
        badge: 2,
      },
      {
        id: 2,
        name: '后端',
        url: '/?type=后端',
        badge: 0,
        children: [
          { name: '后端' },
          { name: 'Java' },
          { name: '掘金·日新计划' },
          { name: 'Go' },
          { name: '架构' },
          { name: '数据库' },
          { name: 'Spring Boot' },
          { name: '掘金·百日计划' },
          { name: 'Spring' },
          { name: 'ElasticSearch' },
          { name: '算法' },
          { name: '面试' },
          { name: 'MySQL' },
          { name: 'Redis' },
          { name: 'Kubernetes' },
        ],
      },
      {
        id: 3,
        name: '前端',
        url: '/?type=前端',
        badge: 0,
        children: [
          { name: '前端' },
          { name: 'JavaScript' },
          { name: 'Vue.js' },
          { name: '掘金·日新计划' },
          { name: 'React.js' },
          { name: 'CSS' },
          { name: '面试' },
          { name: 'Node.js' },
          { name: '后端' },
          { name: 'TypeScript' },
          { name: '架构' },
          { name: 'Flutter' },
          { name: '前端框架' },
          { name: 'Webpack' },
          { name: '程序员' },
        ],
      },
      {
        id: 4,
        name: 'Android',
        url: '/?type=Android',
        badge: 0,
      },
      {
        id: 5,
        name: 'iOS',
        url: '/?type=iOS',
        badge: 0,
      },
      {
        id: 6,
        name: '人工智能',
        url: '/?type=人工智能',
        badge: 0,
      },
      {
        id: 7,
        name: '开发工具',
        url: '/?type=人工智能',
        badge: 0,
      },
      {
        id: 8,
        name: '代码人生',
        url: '/?type=代码人生',
        badge: 0,
      },
      {
        id: 9,
        name: '阅读',
        url: '/?type=阅读',
        badge: 0,
      },
    ],
  } = props

  // const [currentPath, setCurrentPath] = useState('/recommended')

  // const router = useRouter()
  // useEffect(() => {
  //   setCurrentPath(router.asPath)
  // }, [router])

  const { isUp } = useLayout()
  const [currentActive, setActive] = useState(0)

  return (
    <>
      <div className={classNames({ [styles.top]: !isUp }, styles.wrapper)}>
        <div className={styles.lowerNav}>
          <ul className={styles.navContainer}>
            {list.map((item) => {
              return (
                <li key={item.id} className={styles.navItem}>
                  <Badge count={item.badge} dot>
                    <Link
                      href={{ query: { category: item.url } }}
                      as={item.url}
                      className={classNames(
                        { [styles.activeItem]: currentActive === item.id },
                        styles.name,
                      )}
                      onClick={() => setActive(item.id)}
                    >
                      {item.name}
                    </Link>
                  </Badge>

                  {item.children && (
                    <ul className={styles.subNav}>
                      {item.children?.map(subItem => (
                        <li key={subItem.name} className={styles.subNavItem}>
                          <Link href={`/?type=${subItem.name}`} onClick={() => setActive(item.id)}>
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <Link
            href="/subscribe/subscribed"
            className={classNames(styles.subscribed, styles.navItem)}
          >
            标签管理
          </Link>
        </div>
      </div>
      <div style={{ height: '45px' }}></div>
    </>
  )
})

LowerNav.displayName = 'LowerNav'
export default LowerNav
