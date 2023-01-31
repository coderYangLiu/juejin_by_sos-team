import { memo } from 'react'
import type { FC, ReactElement } from 'react'

import BaseItem from '../base'

export interface IProps {
  username?: string;
  title?: string;
  description?: string;
  imgsrc?: string;
  imgalt?: string;
}//日期的部分需要和后端协商一下

const AdvertisementItem: FC<IProps> = memo((props) => {
const{username, title, description, imgsrc, imgalt} =   props;

  const tag = (<>广告</>)
  return (
    <div className=''>
      <BaseItem tag={tag}/>
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
