import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'
import { Affix } from '@arco-design/web-react'
import styles from './index.module.less'
import { content1 } from './config'
import MarkDown from '@/components/mark-down'
import PostTOC from '@/components/post/toc'

export interface IProps {
  children?: ReactElement
}

const PostId: FC<IProps> = memo(() => {
  const router = useRouter()
  const { id } = router.query
  // const { children } = props

  return (
    <div className={styles['post-wrapper']}>
      <div className={styles.left}>
        <MarkDown value={content1} />
      </div>
      <div className={styles.right}>
        PostId : {id}
        <Affix offsetTop={80}>
          <div className={styles['article-catalog']}>
            <PostTOC />
          </div>
        </Affix>
      </div>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id
  console.log(id)

  return {
    props: {},
  }
}

PostId.displayName = 'PostId'
export default PostId
