import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Image from 'next/image'
import { Divider } from '@arco-design/web-react'
import styles from './index.module.less'
import type { IImage, IMate } from '@/global/types'

export interface IProps {
  meta?: IMate
  title?: string
  desc?: string
  image?: IImage
  tag?: ReactElement
  actionList?: ReactElement // 查看/点赞/评论
}

const BaseItem: FC<IProps> = memo((props) => {
  const {
    meta,
    title = '顶刊TIP 2022｜武汉大学遥感国重团队提出二元变化引导的高光谱遥感多类变化检测网络BCG-Net',
    desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur sed odio, mollitia possimus ipsam sit cumque! Eaque iusto sit vitae cum molestiae harum veritatis, nemo amet modi, beatae officiis.',
    image,
    actionList,
    tag,
  } = props

  return (
    <div className={styles.entry}>
      <div className={styles['meta-container']}>
        <a href="">前端</a>

        {meta?.author && <a href=""> {meta.author ?? ''} </a>}
        {meta?.date && (
          <>
            <Divider type="vertical" />
            <a href=""> {meta.date} </a>
          </>
        )}
        {meta?.tags && (
          <>
            <Divider type="vertical" />
            <a href=""> {meta.tags ?? '后端'} </a>
          </>
        )}
      </div>

      {tag && <div className={styles.tag}> {tag} </div>}

      <div className={styles['content-wrapper']}>
        <div className={styles.main}>
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>
            <a href="">{desc}</a>
          </div>

          {actionList}
        </div>

        {image && (
          <Image src={image.src} width={image.width ?? 120} height={image.height ?? 80} alt={image.alt ?? ''} />
        )}
      </div>
    </div>
  )
})

BaseItem.displayName = 'BaseItem'
export default BaseItem
