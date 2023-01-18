import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Button } from '@arco-design/web-react'
import styles from './index.module.less'
import HeaderNav from './cpns/nav'
import { useTheme } from '@/hooks/useTheme'

export interface IProps {
  children?: ReactElement
}

const Header: FC<IProps> = memo(() => {
  const { setDark } = useTheme()

  return (
    // 包裹一层方便布局
    <div className={styles.wrapper}>
      <header className={styles.header}>
      <div>
        <span>Header Logo  component-header</span>
        <HeaderNav />
      </div>

      <div className="right">
        <Button type="primary" onClick={setDark}>
          change Theme
        </Button>
      </div>
    </header>
    </div>
  )
})

Header.displayName = 'Header'
export default Header
