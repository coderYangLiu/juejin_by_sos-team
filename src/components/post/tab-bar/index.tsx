import { memo } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { Divider } from '@arco-design/web-react'
import classNames from 'classnames'
import styles from './index.module.less'
import type { IArticleInfo } from '@/service/api/types'
import { useScroll } from '@/hooks/useScroll'

type IProps = IArticleInfo & {}

const TabBar: FC<IProps> = memo(({ like = 0, comment = 0 }) => {
  const { changeDistanc } = useScroll()

  return (
    <>
      <div className={styles.wrapper}>
       <button className={classNames(changeDistanc <= 0 ? [styles.show] : [styles.hide])}>APP内打开</button>

        <div className={styles.tabbar}>
          <div className={styles.item}>
            <Image
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/00ba359ecd0075e59ffbc3d810af551d.svg"
              alt=""
              width={23}
              height={23}
            />
            <span>{like}</span>
          </div>

          <Divider className={styles.divider} type="vertical" />

          <div className={styles.item}>
            <Image
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/336af4d1fafabcca3b770c8ad7a50781.svg"
              alt=""
              width={23}
              height={23}
            />
            <span>{comment}</span>
          </div>

          <Divider className={styles.divider} type="vertical" />

          <div className={styles.item}>
            <Image
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/3d482c7a948bac826e155953b2a28a9e.svg"
              alt=""
              width={23}
              height={23}
            />
            <span>收藏</span>
          </div>
        </div>
      </div>
    </>
  )
})

TabBar.displayName = 'TabBar'
export default TabBar
