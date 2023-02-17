import type { FC } from 'react'
import { memo } from 'react'
import styles from './index.module.less'

interface Props {
  slogan?: string
}

const getTimeState = () => {
  // 获取当前时间小时 0-23
  const hours = new Date().getHours()
  // 设置默认文字
  let text = ''
  // 判断当前时间段
  if (hours > 6 && hours <= 10)
    text = '早上好！'
  else if (hours <= 14)
    text = '中午好！'
  else if (hours <= 18)
    text = '下午好！'
  else
    text = '晚上好！'

  return text
}

const Welcome: FC<Props> = memo((props: Props) => {
  const { slogan = '点亮在社区的每一天' } = props
  const showStrimg = getTimeState()

  return (
    <div className={styles.myCard}>
      <div>
        <div className={styles.left}>
          <span>{showStrimg}</span>
          <div>{slogan}</div>
        </div>
        <button className={styles.right}>
          <span>去签到</span>
        </button>
      </div>
    </div>
  )
})

Welcome.displayName = 'Welcome'
export default Welcome
