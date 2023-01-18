import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import type { GetServerSideProps } from 'next'
import axios from 'axios'
import style from './index.module.less'

export interface IProps {
  children?: ReactElement
  list: any[]
  article_info: any
}

const Fetch: FC<IProps> = memo((props) => {
  const { list, article_info } = props

  return (
    <div className={style.fetch}>
      <ul>
        {
          list.map(item => (
            <li key={item.commentId}>
              <span>{item.content}</span>
            </li>
          ))
        }
      </ul>

      <div className='markdown-body'>
        <ReactMarkdown>{article_info}</ReactMarkdown>
      </div>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async () => {
  // http://127.0.0.1:4523/m1/2208993-0-default/article_info
  const data = await axios.get('https://music.mrly.top/comment/music?id=186016&limit=1')
  const data2 = await axios.get('http://127.0.0.1:4523/m1/2208993-0-default/article_info')

  return {
    props: {
      list: data.data.hotComments,
      article_info: data2.data.mark_content,
    },
  }
}

Fetch.displayName = 'Fetch'
export default Fetch
