import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Button } from '@arco-design/web-react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { IconMoon, IconSun } from '@arco-design/web-react/icon'
import styles from './index.module.less'
import HeaderNav from './cpns/nav'
import { useTheme } from '@/hooks/useTheme'
import { useLayout } from '@/hooks/useLayout'

export interface IProps {
  children?: ReactElement
}

const Header: FC<IProps> = memo(() => {
  const { setDark, isDark } = useTheme()
  const { isUp } = useLayout()

  return (
    // 包裹一层方便布局
    <>
      <div className={classNames(styles.wrapper, isUp ? styles['slide-in'] : styles['slide-out'])}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
              alt="稀土掘金"
              width={107}
              height={22}
              className={styles['logo-img']}
            />
            <Image
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
              alt="稀土掘金"
              className={styles.mobile}
              width={31}
              height={24}
            />
          </Link>

          <div className={styles['nav-list']}>

            <HeaderNav active={0}/>

            <div className={styles['right-side-nav']}>
              <Button onClick={setDark} shape='circle' icon={isDark ? <IconMoon /> : <IconSun />} />
            </div>
          </div>
        </header>
      </div>

      <div style={{ height: '60px' }}></div>
    </>
  )
})

Header.displayName = 'Header'
export default Header
