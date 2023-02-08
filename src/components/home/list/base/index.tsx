import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
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
    meta = {
      author: '掘金酱',
      date: '1天前',
      tags: [{ name: 'Vue', link: 'vue' }, { name: 'React', link: 'react' }],
    },
    title = '顶刊TIP 2022｜武汉大学遥感国重团队提出二元变化引导的高光谱遥感多类变化检测网络BCG-Net',
    desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur sed odio, mollitia possimus ipsam sit cumque! Eaque iusto sit vitae cum molestiae harum veritatis, nemo amet modi, beatae officiis.',
    image,
    actionList,
    tag,
  } = props

  return (
    <div className={styles.base}>
      <div className={styles['meta-container']}>
        {/* 作者 */}
        {meta?.author && <div className={styles.item}><Link href=""> {meta.author} </Link></div> }
        {/* 时间 */}
        {meta?.date && <div className={classNames([styles.item], [styles.date])}>  {meta.date}  </div> }
        {/* 标签 */}
        {meta?.tags && (
          <div className={styles.item}>
            { meta.tags.map(tag => <Link key={tag.link} href={tag.link} className={styles.tags}>{tag.name}</Link>) }
          </div>
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

        {image && <Image src={image.src} width={image.width ?? 120} height={image.height ?? 80} alt={image.alt ?? ''} /> }
      </div>
    </div>
  )
})

BaseItem.displayName = 'BaseItem'
export default BaseItem
