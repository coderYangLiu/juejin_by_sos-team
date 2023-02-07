import { Card } from '@arco-design/web-react'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import styles from './index.module.less'

const Download = memo(() => {
  return (
    <div className="sidebar-block">
      <Link href='https://juejin.cn/app'>
        <Card className={styles.card} hoverable bodyStyle={{ padding: '12px' }}>
          <div className={styles.content}>
            <div>
              <Image
                src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png'}
                alt="download"
                width={50}
                height={50}
              />
            </div>

            <div className={styles.right}>
              <div className={styles.title}> 下载稀土掘金APP </div>
              <div className={styles.desc}> 一个帮助开发者成长的社区 </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
})

Download.displayName = 'Download'
export default Download
