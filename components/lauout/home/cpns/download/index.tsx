// components/layout/home/cpns/download/index.tsx
import { FC } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.less'

interface IProps {
  headline?: string;
  desc?: string;
  imageSrc?: string;
  href?: string;
}

// todo: qrImage, headline和desc的内容后台配置
const Download: FC<IProps> = (props) => {
  return (
    <div className={styles.siderbarBlock}>
      <div className={styles.blockBody}>
        <Link href="https://juejin.cn/app" className={styles.a}>
          <div className={styles.appLink}>
            <img 
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" 
              alt="稀土掘金app下载二维码"
              className={styles.qrImg}
            />
            <div className={styles.contentBox}>
              <div className={styles.headline}>下载稀土掘金APP</div>
              <div className={styles.desc}>一个帮助开发者成长的社区</div>
            </div>
          </div>
        </Link>
      </div>


    </div>
  )
}
export default Download;