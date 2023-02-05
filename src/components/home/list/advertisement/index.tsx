import { memo } from 'react'
import type { FC } from 'react'

import type { IProps } from '../base'
import BaseItem from '../base'

const AdvertisementItem: FC<IProps> = memo((props) => {
  const tag = (<>广告</>)

  return (
    <div className='ad'>
      <BaseItem tag={tag} {...props}/>
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
