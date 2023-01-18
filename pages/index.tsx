import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

import HomeLayout from '@/components/lauout/home'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      Home Page
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
