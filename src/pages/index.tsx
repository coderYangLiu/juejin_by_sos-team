import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { Divider } from '@arco-design/web-react'
import classNames from 'classnames'

import type { FC } from 'react'

import styles from './index.module.less'

import Banner from '@/components/banner'
import { HomeCard, HomeCpns, HomeList } from '@/components/home'
import { useHomeLayout } from '@/hooks/useHomeLayout'
import { fetchArticles, fetchHomeData, fetchHomeNav, wrapper } from '@/store'
import type { AppDispatch, AppState } from '@/store'

const navs = [
  { name: '推荐', href: '/', current: '' },
  { name: '最新', href: '/?sort=newest', current: 'newest' },
  { name: '热榜', href: '/?sort=three_days_hottest', current: 'three_days_hottest' },
]

const Home: FC = () => {
  const { sideFixed, isUp } = useHomeLayout(2)
  const [currentSort, setCurrentSort] = useState('')
  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()

  const { homeData } = useSelector((state: AppState) => ({
    homeData: state.home.homeData,
  }))

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  useEffect(() => {
    // sort
    const { sort = '' } = router.query
    setCurrentSort(sort as string)

    console.log(router.query)
  }, [router.query])

  return (
    <div className="home-wrapper">
      <HomeCpns.Nav />

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

          <HomeList.EntryItem />
          <HomeList.AdvertisementItem />
        </div>

        <div className={styles.right}>
          <HomeCard.Welcome />
          <div className={classNames({ [styles['side-fixed']]: sideFixed, [styles.top]: isUp })}>
            {/* Banners */}
            { homeData.banners?.map((item: any) => (<Banner key={item.id} {...item} />)) }
            <HomeCard.Download />
            {/* Users */}
            {!sideFixed && homeData.authors && <HomeCard.Users />}
          </div>
          {/* Links & Footer 不需要固定 */}
          {!sideFixed && (<> <HomeCard.Links /> <HomeCpns.Footer /> </>)}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  console.log('Home getServerSideProps')
  await store.dispatch(fetchHomeNav())
  await store.dispatch(fetchHomeData())

  return {
    props: {},
  }
})

Home.displayName = 'Home'
export default Home
