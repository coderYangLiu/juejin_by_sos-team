import React, { memo, useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import Head from 'next/head'
import styles from './index.module.less'
import MarkDown from '@/components/mark-down'
import { PostAuthor, User } from '@/components/author'
import Banner from '@/components/banner'
import PostCpns from '@/components/post'
import { fetchPostData, wrapper } from '@/store'

import type { AppState } from '@/store'
import { getArticleById } from '@/service/api'
import type { IArticle } from '@/service/api/types'
import { useLayout } from '@/hooks/useLayout'
import { formatNumber } from '@/utils/format'
import type { NextPageWithLayout } from '@/pages/_app'
import PostLayout from '@/layout/post'

export interface IProps {
  article: IArticle
}

const PostId: NextPageWithLayout<IProps> = memo((props) => {
  const { article } = props
  const { title, image, content, article_tags, author, info, createdAt }
    = article
  const { postData } = useSelector((store: AppState) => ({
    postData: store.post.postData,
  }))
  const { banners, articles } = postData
  const offset = -220
  const { sideFixed, isUp } = useLayout(1, offset)

  const showDate = new Date(createdAt).toLocaleString()
  const [sideStatus, setSideStatus] = useState(true)

  // 假数据
  const category = '前端'
  const column = 'javaWeb'
  const columnInfo = '前端react、next.js开发专项'
  const columnImgUrl
    = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95414745836549ce9143753e2a30facd~tplv-k3u1fbpfcp-no-mark:160:160:160:120.awebp'

  return (
    <div className="post-wrapper">
      <Head>
        <title>{title}</title>
      </Head>

      <PostCpns.SidePanel
        {...info}
        sideStatus={sideStatus}
        setSideStatus={(b: boolean) => setSideStatus(b)}
      />

      <div className={styles.left}>
        <h1 className={styles['article-title']}>{title}</h1>

        <div>
          <User
            author={{
              ...author,
              position: `${showDate} · 阅读 ${formatNumber(info?.view ?? 0)}`,
            }}
          />
        </div>
        {/* 此处width和height仅为适配组件必须属性，生效样式在less中体现 */}
        {image && (
          <Image
            src={image}
            priority
            alt={'文章封面'}
            width={200}
            height={200}
            className={styles.postCover}
          />
        )}

        <MarkDown content={content} />

        <div className={styles.articleEnd}>
          {/* 分类 标签 */}
          <PostCpns.PostInfo article_tags={article_tags} category={category} />
          <PostCpns.Column
            column={column}
            columnInfo={columnInfo}
            columnImgUrl={columnImgUrl}
          />
          <PostCpns.Extension />
        </div>
      </div>
      <div className={styles.right}>
        {sideStatus && (
          <>
            <PostAuthor author={author} />

            {banners?.map(item => (
              <Banner key={item.id} {...item} hasDesc={false} />
            ))}

            <PostCpns.Related articles={articles} />
          </>
        )}

        <div
          className={classNames({
            [styles['side-fixed']]: sideFixed || !sideStatus,
            [styles.top]: isUp,
          })}
        >
          <PostCpns.Toc offset={offset}/>
        </div>
      </div>

      <PostCpns.TabBar {...info} />
    </div>
  )
})

PostId.getLayout = (page) => {
  return <PostLayout>{page}</PostLayout>
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ params }) => {
      const id = params?.id
      const article = await getArticleById(parseInt(id as string))
      await store.dispatch(fetchPostData())

      return {
        props: {
          article,
        },
      }
    },
)

PostId.displayName = 'PostId'
export default PostId
