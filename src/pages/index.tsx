import type { FC } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

import classNames from 'classnames'
import styles from './index.module.less'

import { HomeCard, HomeCpns, HomeList } from '@/components/home'
import { useHomeLayout } from '@/hooks/useHomeLayout'

const Home: FC = () => {
  const { sideFixed } = useHomeLayout()

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://sos.staraway.love/api/layouts/1?populate=*')
      console.log(data.data.data.header_navs)
    }
    fetchData()
    console.log('Home')
  }, [])

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
          <div>
            <h2>最新 xx xx</h2>

            <HomeList.AdvertisementItem />
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
        </div>

        <div className={styles.right}>
          <HomeCard.Signin />

          <div className={classNames({ [styles['side-fixed']]: sideFixed })}>
            <HomeCard.Banner />
            <HomeCard.Banner />

            {
              !sideFixed && (
                <HomeCard.Users />
              )
            }

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
