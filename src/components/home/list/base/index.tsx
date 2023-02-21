import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './index.module.less'

import type { IArticle } from '@/service/api/types'
import formatTime from '@/utils/format'

export type IProps = {
  tag?: ReactElement // 广告
  actionList?: ReactElement // 查看/点赞/评论
} & IArticle

const BaseItem: FC<IProps> = memo((props) => {
  const {
    actionList,
    tag,

    // IArticle
    id,
    title = '顶刊TIP 2022｜武汉大学遥感国重团队提出二元变化引导的高光谱遥感多类变化检测网络BCG-Net',
    desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur sed odio, mollitia possimus ipsam sit cumque! Eaque iusto sit vitae cum molestiae harum veritatis, nemo amet modi, beatae officiis.',
    image,
    article_tags,
    author,
    createdAt,
  } = props

  const showDateString = formatTime(new Date(createdAt).getTime())

  return (
    <div className={styles.base}>
      <div className={styles['meta-container']}>
        {/* 作者 */}
        {author && <div className={styles.item}><Link href={author.href}> {author.name} </Link></div> }
        {/* 时间 */}
        {createdAt && <div className={classNames([styles.item], [styles.date])}>  {showDateString}  </div> }
        {/* 标签 */}
        {article_tags && (
          <div className={styles.item}>
            { article_tags.map(tag => <Link key={tag.id} href={tag.path ?? `/tag/${tag.name}`} className={styles.tags}>{tag.name}</Link>) }
          </div>
        )}
      </div>

      {tag && <div className={styles.tag}> {tag} </div>}

      <Link href={{ pathname: `/post/${id}` }} target="_blank" style={{ width: '100%' }}>
        <div className={styles['content-wrapper']}>
          <div className={styles.main}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>
              {desc}
            </div>

            {actionList}
          </div>

          {image && <Image className={styles.img} src={image} width={128} height={72} alt={''} /> }
        </div>
      </Link>
    </div>
  )
})

BaseItem.displayName = 'BaseItem'
export default BaseItem
