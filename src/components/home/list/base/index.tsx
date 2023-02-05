import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Image from 'next/image'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
  tag?: ReactElement
  actionList?: ReactElement // 查看/点赞/评论
}

const BaseItem: FC<IProps> = memo((props) => {
  const { actionList, tag } = props

  return (
    <div className={styles.entry}>
      <div className={styles['meta-container']}>
        <a href="">前端</a>
        <a href="">后端</a>
      </div>

      {tag && <div className={styles.tag}> {tag} </div>}

      <div className={styles['content-wrapper']}>
        <div className={styles.main}>
          <div className={styles.title}>
            顶刊TIP 2022｜武汉大学遥感国重团队提出二元变化引导的高光谱遥感多类变化检测网络BCG-Net
          </div>
          <div className={styles.desc}>
            <a href="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur sed odio, mollitia possimus ipsam
              sit cumque! Eaque iusto sit vitae cum molestiae harum veritatis, nemo amet modi, beatae officiis.
            </a>
          </div>

          {/*  */}
          {actionList}
        </div>

        <Image
          src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c511a17b46143b3918913762839f93d~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
          width={120}
          height={80}
          alt=""
        />
      </div>
    </div>
  )
})

BaseItem.displayName = 'BaseItem'
export default BaseItem
