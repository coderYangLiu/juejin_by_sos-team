import { memo } from 'react'
import type { FC } from 'react'

import BaseItem from '../base'

export interface IProps {
}

const AdvertisementItem: FC<IProps> = memo(() => {
  const tag = (<>广告</>)
  return (
    <div className='ad'>
      <BaseItem tag={tag}/>
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
