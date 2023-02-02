import { Card } from '@arco-design/web-react'
import { memo } from 'react'
import styles from './index.module.less'

const Signin = memo(() => {
  const hours = new Date().getHours()
  // 设置默认文字
  let text = ''
  // 判断当前时间段
  if (hours <= 10)
    text = '早上好！'
  else if (hours <= 14)
    text = '中午好！'
  else if (hours <= 18)
    text = '下午好！'
  else if (hours <= 24)
    text = '晚上好！'

  return (
    <div className='sidebar-block'>
       <Card
        className={styles.card}
        hoverable
      >
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              {text}
            </div>
            <div className={styles.desc}>点亮在社区的每一天</div>
          </div>

          <div className={styles.right}>
            去签到
          </div>
        </div>
      </Card>
    </div>
  )
})

Signin.displayName = 'Signin'
export default Signin
