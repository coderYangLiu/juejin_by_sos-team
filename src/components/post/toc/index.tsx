import { memo, useEffect, useState } from 'react'
import type { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { debounce } from 'lodash-es'
import styles from './index.module.less'
import BaseCard from '@/components/common/card'

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
  const [minLevel, setMinLevel] = useState(6)
  const [headings, setHeadings] = useState<ICatalogue[]>([])
  const [activeIdx, setActiveIdx] = useState(0)

  function transformToId(index: number) {
    setActiveIdx(index)
    document.querySelector(`#heading-${index}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = debounce(() => {
      let index = headings.findIndex((item) => {
        return item.top > window.scrollY
      })
      index = index >= 1 ? index - 1 : 0

      setActiveIdx(index)
      // document.querySelector(`a[href='#heading-${index}']`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 150)

    window?.addEventListener('scroll', onScroll)

    return () => {
      window?.removeEventListener('scroll', onScroll)
    }
  })

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
  }, [minLevel])

  return (
    <div className="sidebar-block">
      <BaseCard title="目录">
        <ul className={styles['catalog-list']}>
          {headings.map((item, index) => {
            return (
              <li
                key={item.href}
                onClick={() => transformToId(index)}
                className={classNames({ [styles.active]: activeIdx === index }, styles.item)}
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
