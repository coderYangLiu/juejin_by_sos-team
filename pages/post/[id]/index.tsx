import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'

export interface IProps {
  children?: ReactElement
}

const PostId: FC<IProps> = memo(() => {
  const router = useRouter()
  const { id } = router.query
  // const { children } = props

  return (
    <div className=''>
      PostId : {id}
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id
  console.log(id)

  return {
    props: {
    },
  }
}

PostId.displayName = 'PostId'
export default PostId
