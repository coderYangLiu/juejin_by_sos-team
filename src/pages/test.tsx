import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { HomeList } from '@/components/home'
import { useScroll } from '@/hooks/useScroll'

export interface IProps {
  children?: ReactElement
}

const Test: FC<IProps> = memo(() => {
  const { isBottom, scrollPosition, changeDistanc } = useScroll()
  return (
    <div>
      {/* 遍历数据 根据类型判断 传Props */}
      <HomeList.AdvertisementItem />
      <HomeList.EntryItem />
      <HomeList.EntryItem />
      <HomeList.EntryItem />
      <HomeList.EntryItem />
      <HomeList.EntryItem />
      <h1>{isBottom ? 'bottom' : 'no'}</h1>
      <h1>{scrollPosition}</h1>
      <h1>{changeDistanc}</h1>
      <HomeList.AdvertisementItem />
      <HomeList.EntryItem />
      <HomeList.EntryItem />
      <HomeList.AdvertisementItem />
    </div>
  )
})

Test.displayName = 'Test'
export default Test
