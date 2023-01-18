import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

import HomeLayout from '@/components/lauout/home'
import { EntryItem } from '@/components/home-list'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h2>最新  xx  xx</h2>

      <EntryItem />
      <EntryItem />
      <EntryItem />
      <EntryItem />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => (
  <>
    <HomeLayout navData={[1, 2, 3]}>{page}</HomeLayout>
  </>
)

Home.displayName = 'Home'
export default Home
