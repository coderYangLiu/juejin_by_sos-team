import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { AdvertisementItem, EntryItem } from '@/components/home-list'
import { useScroll } from '@/hooks/useScroll'

export interface IProps {
  children?: ReactElement
}

const Test: FC<IProps> = memo(() => {
  const { isBottom, scrollPosition, changeDistanc } = useScroll()
  return (
    <div>
      {/* 遍历数据 根据类型判断 传Props */}
      <AdvertisementItem />
      <EntryItem />
      <EntryItem />
      <EntryItem />
      <EntryItem />
      <h1>{isBottom ? 'bottom' : 'no'}</h1>
      <h1>{scrollPosition}</h1>
      <h1>{changeDistanc}</h1>
      <AdvertisementItem />
      <EntryItem />
      <EntryItem />
      <AdvertisementItem />
    </div>
  )
})

Test.displayName = 'Test'
export default Test
