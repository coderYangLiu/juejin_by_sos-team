import { useEffect, useState } from 'react'
import { debounce } from 'lodash-es'

const BOTTOM_OFFSET = 100

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const [changeDistanc, setChangeDistanc] = useState(0)

  const handleScroll = debounce(() => {
    const position = window.pageYOffset

    setChangeDistanc(position - scrollPosition)

    setScrollPosition(position)

    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - BOTTOM_OFFSET
    setIsBottom(isBottom)
  }, 100, { leading: true })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { scrollPosition, isBottom, changeDistanc }
}
