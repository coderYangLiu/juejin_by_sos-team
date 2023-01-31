import type { ReactElement } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import type { NextPageWithLayout } from '@/pages/_app'

import HomeLayout from '@/components/lauout/home'
import { AdvertisementItem, EntryItem } from '@/components/home-list'

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://sos.staraway.love/api/layouts/1?populate=*')
      console.log(data.data.data.header_navs)
    }
    fetchData()
    console.log('Home')
  }, [])
  return (
    <div>
      <h2>最新  xx  xx</h2>

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
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>
    </>
  )
}

Home.displayName = 'Home'
export default Home
