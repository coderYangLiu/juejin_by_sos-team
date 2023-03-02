import { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { throttle } from 'lodash-es'
import { useRouter } from 'next/router'
import styles from './index.module.less'
import BaseCard from '@/components/common/card'
import { useLayout } from '@/hooks/useLayout'

export interface IProps {
  children?: ReactElement
  offset?: number
}

interface ICatalogue {
  href: string
  text: string
  level: number
  top: number
}

const PostTOC: FC<IProps> = memo(({ offset }) => {
  const router = useRouter()
  const { isUp, sideFixed } = useLayout(1, offset)
  const [minLevel, setMinLevel] = useState(6)
  const [headings, setHeadings] = useState<ICatalogue[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [isScroll, setIsScroll] = useState(true)

  const tcoRef = useRef<HTMLUListElement>(null)
  const tocBlock = useRef<HTMLDivElement>(null)

  function transformToId(index: number, offset = 0) {
    setIsScroll(false)
    document.querySelector(`#heading-${index}`)?.scrollIntoView()

    setTimeout(() => {
      setIsScroll(true)
      if (isUp)
        window.scrollTo(0, window.scrollY - 60 + offset)
    }, 20)
    setActiveIdx(index)
  }

  // 获取目录
  useEffect(() => {
    const markDownEl = document.querySelector('.markdown-body')

    const hs: HTMLHeadElement[] = Array.from(markDownEl!.querySelectorAll('h1,h2,h3,h4,h5,h6'))
    const catalogue: ICatalogue[] = []
    hs.forEach((item, idx) => {
      const h = parseInt(item.nodeName.substring(1, 2))
      setMinLevel(Math.min(minLevel, h))

      item.id = `heading-${idx}`
      catalogue.push({
        href: `#heading-${idx}`,
        text: item.textContent ?? '',
        level: h,
        top: item.offsetTop,
      })
    })

    setHeadings(catalogue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  useEffect(() => {
    // 首次进入滚动
    const active = router.asPath.split('#heading-')[1]
    if (active)
      setTimeout(() => transformToId(parseInt(active)), 300)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onScroll = throttle(() => {
    if (!isScroll)
      return
    let idx = 0
    const index = headings.findIndex((item) => {
      return item.top > window.scrollY
    })
    idx = index === -1 ? headings.length - 1 : index === 0 ? 0 : index - 1

    setActiveIdx(idx)

    if (sideFixed)
      tcoRef.current?.querySelector(`[href='#heading-${activeIdx}']`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 150)

  useEffect(() => {
    window?.addEventListener('scroll', onScroll)

    return () => window?.removeEventListener('scroll', onScroll)
  })

  return (
    <div className="sidebar-block" ref={tocBlock}>
      <BaseCard title="目录">
        <ul ref={tcoRef} className={styles['catalog-list']}>
          {headings.map((item, index) => {
            return (
              <li
                key={item.href}
                onClick={() => transformToId(index)}
                className={classNames({ [styles.active]: activeIdx === index }, styles.item)}
                style={{ paddingLeft: `${(item.level - minLevel) * 16 + 8}px` }}
              >
                <div className={styles['a-container']}>
                  <a href={item.href} className={styles['catalog-aTag']} title={item.text}>
                    {item.text}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </BaseCard>
    </div>
  )
})

PostTOC.displayName = 'PostTOC'
export default PostTOC
