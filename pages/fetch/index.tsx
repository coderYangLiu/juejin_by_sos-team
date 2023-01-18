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
  const { article_info } = props
  const info = '# 15号会议\n\n## 1.自我介绍\n\n## 2.本人目前对题目的理解\n\n服务端渲染的前端+带gui的提供接口的cms\n\n## 3.技术栈\n\n1.前端框架nextjs\n\n\n\n3.开发语言typescript\n\n4.网络请求库axios \n\n5.cms相关技术栈暂需讨论\n\n## 4.需求分析及技术方案\n\n### 前端方面\n\n#### 1.主题化\n\n优先级不高 我计划是项目中后期再做 不过有好的实现方案的可以直接提 \n\n#### 2.顶部tab固定布局\n\n```jsx\nimport Layout from \'../components/layout\'\n\nexport default function MyApp({ Component, pageProps }) {\n  return (\n    <Layout>\n      <Component {...pageProps} />\n    </Layout>\n  )\n}\n\n\n```\n\n这一块倒不复杂 不过我感觉比remix的outlet要差不少（\n\n这一块需要优先完成 这样就可以直接分工 一批人去做首页的其他内容 一批人去做文章详情页\n\n#### 3.剩余部分\n\n边做边分析吧 有问题记录好留到之后的会议 大家一起讨论解决 \n\n### cms方面\n\n主要听大家讨论 我这边没啥能说的\n\n## 5.人员分配（？）\n\n首页3人\n\n文章详情页3人\n\ncms1人\n\n## 6.管理方案\n\n暂定于**每周日开一次会** 会议内容主要是记录进度 或者技术分享 问题解决等等 大家一定要多多交流  咱们组队匆忙 彼此了解很少 有事可能耽误进度的 要及时说出来 方便咱们调整\n\n## 7.项目结构及代码规范\n\n项目结构我觉得就主要参考那两个demo 代码规范这一块可以讨论一下 稍微统一一些写法之类的 比如type还是interface等等\n\n## 8.个人感受及提醒\n\n大家记得参加各个活动 理论上咱们都是能结营的\n\n然后的话 我对时间的评估是比较乐观的 （nextjs上手确实还可以 \n\n最后 咱们还是重在学习和参与 有什么事及时沟通就好 我也一定全力以赴 不辜负大家的信任\n\n祝合作愉快'

  return (
    <div className={style.fetch}>

      <div className={style.article}>
        <div className='markdown-body'>
              <ReactMarkdown>{article_info}</ReactMarkdown>
              <ReactMarkdown>{info}</ReactMarkdown>
            </div>
      </div>

    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async () => {
  // http://127.0.0.1:4523/m1/2208993-0-default/article_info
  const data2 = await axios.get('http://127.0.0.1:4523/m1/2208993-0-default/article_info')

  return {
    props: {
      article_info: data2.data.mark_content,
    },
  }
}

Fetch.displayName = 'Fetch'
export default Fetch
