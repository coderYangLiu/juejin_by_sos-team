import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { Divider, Skeleton } from '@arco-design/web-react'
import classNames from 'classnames'

import type { FC } from 'react'

import Head from 'next/head'
import styles from './index.module.less'

import Banner from '@/components/banner'
import { HomeCard, HomeCpns, HomeList } from '@/components/home'
import { useLayout } from '@/hooks/useLayout'

import { fetchArticles, fetchHomeData, fetchHomeNav, wrapper } from '@/store'
import { closeBannerById } from '@/store/home'
import type { AppDispatch, AppState } from '@/store'
import type { IArticle } from '@/service/api/types'

const navs = [
  { name: '推荐', href: '/', current: '' },
  { name: '最新', href: '/?sort=newest', current: 'newest' },
  {
    name: '热榜',
    href: '/?sort=three_days_hottest',
    current: 'three_days_hottest',
  },
]

const Home: FC = () => {
  const { sideFixed, isUp } = useLayout(2)
  const [currentSort, setCurrentSort] = useState('')
  const [currentType, setCurrentType] = useState('')
  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()

  const { homeData, articles } = useSelector((state: AppState) => ({
    homeData: state.home.homeData,
    articles: state.home.articles,
  }))

  useEffect(() => {
    // sort
    const sort = (router.query.sort ?? '') as string
    setCurrentSort(sort)
    // filter by article type
    const type = (router.query.type ?? '') as string
    setCurrentType(type)

    dispatch(fetchArticles({}))
  }, [router.query, dispatch])

  const getHomeList = (item: IArticle) => {
    if (item.type === 'article') {
      if (!currentType || item.article_tags.map(tag => tag.name).includes(currentType))
        return <HomeList.EntryItem key={item.id} {...item} />
    }
    else
    if (item.type === 'ad') {
      return <HomeList.AdvertisementItem key={item.id} {...item} />
    }
  }

  return (
    <div className="home-wrapper">
      <Head>
        <title>稀土掘金</title>
      </Head>

      <HomeCpns.Nav />

      <div className={styles.main}>
        <div className={styles.left}>
          <nav className={styles['list-nav']}>
            <ul className={styles['nav-list']}>
              {navs.map((item, index) => (
                <li
                  key={item.current}
                  className={classNames(
                    { [styles.active]: item.current === currentSort },
                    styles.item,
                  )}
                >
                  <Link href={item.href}>{item.name}</Link>
                  {index !== navs.length - 1 && <Divider type="vertical" />}
                </li>
              ))}
            </ul>
          </nav>

          {/* 文章列表 */}
          {articles.length > 0 ? articles?.map(getHomeList) : <Skeleton animation style={{ padding: '20px' }} />}

        </div>

        <div className={styles.right}>
          <HomeCard.Welcome />
          <div
            className={classNames({
              [styles['side-fixed']]: sideFixed,
              [styles.top]: isUp,
            })}
          >
            {/* Banners */}
            {homeData.banners?.map((item: any) => (
              <Banner
                key={item.id}
                {...item}
                handleClose={() => dispatch(closeBannerById(item.id))}
              />
            ))}
            <HomeCard.Download />
            {/* Users */}
            {!sideFixed && homeData.authors && <HomeCard.Users authors={homeData.authors} />}
          </div>
          {/* Links & Footer 不需要固定 */}
          {!sideFixed && (<>  <HomeCard.Links /> <HomeCpns.Footer /> </>)}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    await store.dispatch(fetchHomeNav())
    await store.dispatch(fetchHomeData())

    return {
      props: {},
    }
  },
)

Home.displayName = 'Home'
export default Home
