import { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { debounce } from 'lodash-es'
import { useRouter } from 'next/router'
import styles from './index.module.less'
import BaseCard from '@/components/common/card'
import { useLayout } from '@/hooks/useLayout'

export interface IProps {
  children?: ReactElement
}

interface ICatalogue {
  href: string
  text: string
  level: number
  top: number
}

const PostTOC: FC<IProps> = memo(() => {
  const router = useRouter()
  const { isUp, sideFixed } = useLayout()
  const [minLevel, setMinLevel] = useState(6)
  const [headings, setHeadings] = useState<ICatalogue[]>([])
  const [activeIdx, setActiveIdx] = useState(0)

  const tcoRef = useRef<HTMLUListElement>(null)

  function transformToId(index: number, offset = 0) {
    document.querySelector(`#heading-${index}`)?.scrollIntoView()

    setTimeout(() => {
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
    console.log('首次进入滚动')
    const active = router.asPath.split('#heading-')[1]
    if (active)
      setTimeout(() => transformToId(parseInt(active)), 300)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onScroll = debounce(() => {
      let index = headings.findIndex((item) => {
        return item.top > window.scrollY
      })

      if (index > -1 && index <= headings.length - 1) {
        if (index !== 0)
          index -= 1
      }
      else {
        index = headings.length - 1
      }
      console.log('onScroll', index)
      setActiveIdx(index)

      index > 0 && sideFixed && tcoRef.current?.querySelector(`[href='#heading-${activeIdx}']`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 150)

    window?.addEventListener('scroll', onScroll)

    return () => {
      window?.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <div className="sidebar-block">
      <BaseCard title="目录">
        <ul ref={tcoRef} className={styles['catalog-list']}>
          {headings.map((item, index) => {
            return (
              <li
                key={item.href}
                onClick={() => transformToId(index)}
                className={classNames({ [styles.active]: activeIdx === (isUp ? index - 1 : index) }, styles.item)}
                style={{ paddingLeft: `${(item.level - minLevel) * 16 + 8}px` }}
              >
                <div className={styles['a-container']}>
                  <a href={item.href} className={styles['catalog-aTag']}>
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
