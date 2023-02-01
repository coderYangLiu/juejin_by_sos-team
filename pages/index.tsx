import type { FC } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import styles from './index.module.less'

import { AdvertisementItem, EntryItem } from '@/components/home/list'
import HomeFooter from '@/components/home/footer'
import { HomeBanner, HomeDownload, HomeLinks, HomeSignin } from '@/components/home/card'

const Home: FC = () => {
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

            <AdvertisementItem />
            <EntryItem />
            <EntryItem />
            <EntryItem />
            <EntryItem />
            <EntryItem />
            <EntryItem />
            <EntryItem />
            <AdvertisementItem />
          </div>
        </div>

        <div className={styles.right}>
          <HomeSignin />

          <HomeBanner />
          <HomeBanner />

          <HomeDownload />

          <HomeLinks />

          <HomeFooter />
        </div>
      </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home
