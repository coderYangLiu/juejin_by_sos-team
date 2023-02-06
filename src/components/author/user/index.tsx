import { memo } from 'react'
import type { FC, ReactElement } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const User: FC<IProps> = memo(() => {
  return (
    <Link href="#" className={styles.user}>
      <Image
        className={styles['user-avatar']}
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        width={48}
        height={48}
      />
      <div className={styles.userInfo}>
        <div className={styles.name}>coder xxx xxx</div>
        <div className={styles.desc}>coder desc</div>
      </div>
    </Link>
  )
})

User.displayName = 'User'
export default User
