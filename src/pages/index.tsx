import { useEffect, useState } from 'react'

import axios from 'axios'
import Link from 'next/link'
import classNames from 'classnames'
import { Divider } from '@arco-design/web-react'

import type { FC } from 'react'

import { useRouter } from 'next/router'
import styles from './index.module.less'

import Banner from '@/components/banner'
import { HomeCard, HomeCpns, HomeList } from '@/components/home'
import { useHomeLayout } from '@/hooks/useHomeLayout'

const navs = [
  { name: '推荐', href: '/', current: '' },
  { name: '最新', href: '/?sort=newest', current: 'newest' },
  { name: '热榜', href: '/?sort=three_days_hottest', current: 'three_days_hottest' },
]

const Home: FC = () => {
  const { sideFixed, isUp } = useHomeLayout(2)
  const [currentSort, setCurrentSort] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://sos.staraway.love/api/layouts/1?populate=*')
      console.log(data.data.data.header_navs)
    }
    fetchData()
    console.log('Home')
  }, [])

  useEffect(() => {
    // sort
    const { sort = '' } = router.query
    setCurrentSort(sort as string)

    console.log(router.query)
  }, [router.query])

  return (
    <div className="home-wrapper">
      <div>
        <span>home</span>
        {/* {
          navData?.map(item => (
            <span key={item.id}> {item.title} </span>
          ))
        } */}
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <nav className={styles['list-nav']}>
            <ul className={styles['nav-list']}>
              {navs.map((item, index) => (
                <li
                  key={item.current}
                  className={classNames({ [styles.active]: item.current === currentSort }, styles.item)}
                >
                  <Link href={item.href}>{item.name}</Link>
                  {index !== navs.length - 1 && <Divider type="vertical" />}
                </li>
              ))}
            </ul>
          </nav>

          <HomeList.AdvertisementItem
            image={{
              src: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8d0156e8d194db19b396be27609ebff~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp',
            }}
          />
          <HomeList.EntryItem
            image={{
              src: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8d0156e8d194db19b396be27609ebff~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp',
            }}
          />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem
            image={{
              src: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8d0156e8d194db19b396be27609ebff~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp',
            }}
          />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.AdvertisementItem />
        </div>

        <div className={styles.right}>
          <HomeCard.Welcome />
          <div className={classNames({ [styles['side-fixed']]: sideFixed, [styles.top]: isUp })}>
            <Banner />
            <Banner />
            {!sideFixed && <HomeCard.Users />}
            <HomeCard.Download />
          </div>
          {!sideFixed && (
            <>
              <HomeCard.Links />
              <HomeCpns.Footer />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home
