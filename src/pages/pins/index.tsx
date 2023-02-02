import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import axios from 'axios'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const Pins: FC<IProps> = memo(() => {
  // const { children } = props

  const fetchData = async () => {
    const data1 = await axios.get('/api/hello')
    console.log(data1)
  }

  return (
    <div className={styles.pins} onClick={ fetchData }>
      Pins
    </div>
  )
})

Pins.displayName = 'Pins'
export default Pins
