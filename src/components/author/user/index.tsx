import { memo } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'
import type { IAuthor } from '@/service/api/types'

export interface IProps {
  author: IAuthor
}

const User: FC<IProps> = memo((props) => {
  const { author } = props
  const { name = '', href, avatar, position, info } = author

  return (
    <div className={styles.user}>
      <Link href={href} className={styles.link}>
        <Image
          className={styles.avatar}
          alt={''}
          src={avatar}
          width={48}
          height={48}
        />

        <div className={styles.userInfo}>
          <div className={styles.username}>
            <span className={styles.name}>{name}</span>
            <span className={styles.rank}>
              {info?.rank && (
                <Image
                  className={styles.img}
                  alt={''}
                  src={info.rank}
                  width={48}
                  height={48}
                />
              )}
              {info?.jueyouLevel && (
                <Image
                  className={styles.img}
                  alt={''}
                  src={info.jueyouLevel}
                  width={48}
                  height={48}
                />
              )}
            </span>
          </div>

          <div className={styles.position}>{position}</div>
        </div>
      </Link>
    </div>
  )
})

User.displayName = 'User'
export default User
