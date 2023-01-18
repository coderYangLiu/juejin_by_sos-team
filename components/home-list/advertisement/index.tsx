import { memo } from 'react'
import type { FC, ReactElement } from 'react'

export interface IProps {
  children?: ReactElement
}

const AdvertisementItem: FC<IProps> = memo(() => {
  // const { children } = props

  return (
    <div className=''>
      AdvertisementItem  广告
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
