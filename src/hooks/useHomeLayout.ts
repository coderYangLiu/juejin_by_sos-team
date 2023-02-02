import { useEffect, useState } from 'react'
import { useScroll } from './useScroll'

export const useHomeLayout = () => {
  const { scrollPosition } = useScroll()
  const [sideFixed, setSideFixed] = useState(false)

  // 后期扩展 主导航栏固定, 侧边栏固定高度变化

  useEffect(() => {
    if (scrollPosition > 1500)
      setSideFixed(true)
    else
      setSideFixed(false)
  }, [scrollPosition])

  return {
    sideFixed,
    setSideFixed,
  }
}
