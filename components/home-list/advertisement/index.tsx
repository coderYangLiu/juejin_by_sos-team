import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import styles from './index.module.less'
export interface IProps {
  username?: string;
  title?: string;
  description?: string;
  imgsrc?: string;
  imgalt?: string;
}//日期的部分需要和后端协商一下

const AdvertisementItem: FC<IProps> = memo((props) => {
const{username, title, description, imgsrc, imgalt} =   props;

  return (
    <div className={styles.advertisement}>
      <div className={styles.container}>
        <div className={styles.user}>
          <a href="#" className={styles.userbox}>
            <div className={styles.username}>{username??'沸点小助手'}</div>
          </a>
        </div>
        <div className={styles.dividing}></div>
        <div className={styles.date}>4天前</div>
      </div>
      <div className={styles.tag}>广告</div>
      <div className={styles.main}>
        <div className={styles.infobox}>
          <a href="#" className={styles.title}>
            {title??"来沸点一起#欢喜迎兔年#！"}
          </a>
          <a href="#" className={styles.description}>
            {description??'🧨🧨🧨辞旧迎新之际，来沸点一起#欢喜迎兔年#！分享不同新年风俗，共享一段快乐时光！🐰🐰'}
          </a>
        </div>
        <img src={imgsrc??"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/603b0c5a57d74850aa1ebc5de2f4694a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"} alt={imgalt??"「来沸点一起#欢喜迎兔年#！」封面"} />
      </div>
    </div>
  )
})

AdvertisementItem.displayName = 'AdvertisementItem'
export default AdvertisementItem
