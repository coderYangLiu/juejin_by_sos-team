import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseItem from '../base'

export interface IProps {
  children?: ReactElement
}

const AdvertisementItem: FC<IProps> = memo(() => {
  // const { children } = props

  const tag = (<>广告</>)
  return (
    <div className=''>
      <BaseItem tag={tag}/>
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
