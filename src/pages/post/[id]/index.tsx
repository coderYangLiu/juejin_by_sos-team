import Image from 'next/image'
import React, { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'
import { Affix } from '@arco-design/web-react'
import dynamic from 'next/dynamic'
import styles from './index.module.less'
import PostInfo from '@/components/post/postInfo'
import Extension from '@/components/post/extension'
import Column from '@/components/post/column'

import MarkDown from '@/components/mark-down'
import { PostAuthor, User } from '@/components/author'
import Banner from '@/components/banner'
import Related from '@/components/post/related'

const PostTOC = dynamic(() => import('@/components/post/toc'))

export interface IProps {
  children?: ReactElement
}

const content1 = '---\nhighlight: agate\ntheme: orange\n---\n最近年底绩效季，听了团队同学的述职（P5~P7），并做了一些点评，并再次强调了自己对大家的要求。借此机会，写一篇文章，做一下传达。\n\n本文的标题是「对不同阶段前端工程师的**额外要求**」。因为公司对岗位职级本身一般就会有一个能力模型（JobModel）的定义。比如我司常说的，要求 P6 能独当一面，要求 P7 是领域专家。因此这部分内容我就不赘述了，本文说的是在这基础上，我个人的额外要求。或者说，这也算是对 JobModel 的另一种角度阐述。\n\n## P5 - 小镇做题家\n\n「小镇做题家」这个词是当代名校生对自己的自嘲词汇。简要意思就是有着超强的刷题与应试能力，但视野、思维、社交等软性能力较为薄弱，我这里借来使用一下。**我并不觉得很多学生成为小镇做题家是多糟糕的事情**。相反，**这是当下条件下的最优选择**。一方面，把题做好是最基础要求。另一方面，软性能力的提升是很依赖外部环境的，很多学生并没有这样的环境。\n\n我觉得这个词也挺适合刚毕业初入职场的同学。因为这个阶段的工作主要是靠主管或 Mentor 分配。到大家手上已经是相对明确的模块，甚至连技术方案已经基本选定就等你实现而已。那怎么把这些“题目”正确快速的回答好，就是大家的首要任务，这也是咱们的基础要求。\n\n如果说，打包优化搞不定，多端适配兼容不好，甚至连视觉稿都做不到原模原样还原，那还谈什么技术视野、产品思维、业务Sense呢。**「小镇做题家」至少代表技术的扎实功底与严谨的思维逻辑。** 面对一个问题，能充分理解题意，脑子里能有多种实现方法，并能找到最健壮稳定、最简单抽象的那个方案。做到这样，主管或 Mentor 才能真的放心把任务交给你，过程不会出现意料之外的“惊喜”。\n\n但在成为「小镇做题家」的过程中，有一个软性思维要锻炼并一直保持，那就是要**有问为什么的能力，或者说保持好奇心**。比如说，为什么我们要做这件事？为什么是这么做？我能不能选另外一个方案？\n\n**保持好奇心，一方面能让我们不带着疑问做事情，做事情更有干劲。** 现在我们处理的问题还是小问题，可能1天2天，或者1周2周就结束了。而当未来我们面临一个非常复杂持续的问题，它需要我们持续投入半年一年甚至三年去解决的时候，如果心中对事情，对方案，对未来充满疑惑，那做着做着很快就疲惫甚至迷茫了。\n\n**保持好奇心的另一方面是，让我们对技术能打破砂锅问到底，在一个领域达到一定深度**。我面试过很多三四年经验的同学，但过往那么多需求似乎都没有沉淀出一个他能吹牛的技术领域。我不太相信是需求过于简单。更多的是，大部分同学解决问题都是采用浮于表面的经验主义。map 能循环，forEach 能循环，for 也能循环。我也不知道有什么区别，最近忙我就用 map，写的快。最近代码量低我就 for 循环，变量名写长一点。当然更现实的是，前人用什么，我就用什么。这时候突然出来一个需求，说循环里的函数需要一个一个同步执行，这时候就懵逼了，傻傻每种循环试过去，看看到底哪个行。没有好奇心最终只能停留在各种 API 的使用层面。\n\n保持好奇心自然其他很多好处，比如让同学一直对外界新知识保持跟进，毕竟前端知识日新月异。**当然，过犹不及，也不能让自己成为杠精.....多问为什么，不是无脑问为什么**。\n\n总结来说，对于初入职场的应届生，我觉得基础是要成为「小镇做题家」，大部分题目能独立自主很好的完成。即使有不会的，在主管或导师的指导下，能举一反三，未来类似的题目就难不倒了。在这基础之上，软实力当然是越多越好，但如果时间有限只能做到一个，那就是保持好奇心，遇到事情多问为什么。\n\n## P6 - 科学做事者\n\n「科学做事」是我大团队一个兄弟提出并在他们团队实践的。我觉得说的很好，也借来用用。大家都上过科学课，什么叫「科学」？科学不是泛指物理学或天文学这样的现代学科，科学也不是 === 可证伪。**科学更多的是指一套基于实证的认知方法论**。基于一些日常观察，提出一些假设，并做出可验证性的预言；然后通过严谨的实验验证这些预言，进而验证这些假设；然后发表论文，接受质疑，最终与全世界同行形成共识，诞生一个新的理论。\n\n当然前端领域的「科学做事」，肯定不是照搬科研工作者的方法论。而是说，我们从事前端岗位，解决前端问题，也应该掌握一套方法论。\n\n**比如面对大型业务项目时**：\n\n1.  前期充分评估复杂度与工作量，协调好资源；\n1.  过程积极跟进，遇到风险及时反馈；\n1.  事后验证多方目标是否达成；\n1.  最终复盘总结，接受大家反馈。\n\n**再比如说探索创新技术专项时**：\n\n1.  先要收集现状问题，找到当下核心矛盾；\n1.  然后多轮脑暴，充分调研，寻找最优技术方案与落地机会；\n1.  可以先实现POC版本，争取多方共识；\n1.  过程维持周会/周报驱动，保证项目进度；\n1.  研发完成后，找适合场景落地并通过数据严谨验证结果；\n1.  最终复盘总结输出，吸引更多用户。\n\n面对不同事情方法略有差异，当然抽象来说，也基本是**事前充分评估，事中坚决执行，事后严谨验证，最终总结复盘**。\n\n**为什么说我们工作也要掌握并执行这套方法论呢？**\n\n在这几年我们团队述职中，基本都会出现这样的问题。**一是，部分同学看似产出不错，但总是经不起推敲**。稍微问几个问题，要么回答不清楚，要么总是各种解释。不知道为什么做这事，也不笃定未来是啥方向，也没有严格的数据论证。绕来绕去就那几个理由，“忙”、“来不及”、“忘记了”、“没想到”、“当时只能这样”。**二是，部分同学事情完成的挺好的，但是不被他人感知**。闷声做事，甚至连组内同学都不知道。最终真的到绩效拉通对比的时候，比较吃亏。这些都是为什么呢？本质上是自己前期做事无章法，到最后了才发现缺这缺那。\n\n我相信很多 P6 同学都是从「小镇做题家」晋升上来的。大部分确定性的问题，难不倒他们，大部分寻常的业务需求也难不倒他们。但如果事情再复杂一些，最终要么慌手慌脚，要么最终成品缺胳膊少腿（不够完美）。每次都这样，最终也会失去主管的信任。\n\n我是一个完美主义者，**科学做事，能帮助我们把事情做的更完美，同时也证明自己的专业度**。\n\n## P7 - 因你而不同\n\nP7 同学，一般要么是团队的 TL，要么是某个技术领域的技术专家。很多 P7 同学会觉得自己一年产出很不错，远超他人，但最终主管给的绩效却一般甚至还比较差。这里有两个原因：\n\n一是，**P7 同学拿着更好的薪酬水平，当然要求也会更高**。很多团队 P7 比较少，同学就把自己跟横向的 P6 比，你当然应该比 P6 的同学产出高，要比他们产出还低那还得了。P7 有自己的能力模型，应该寻找大团队内其他优秀的 P7 去对比。\n\n另一个更重要的是，**P7 同学本来就占着好位置了，自然而然会有更高产出**。如果是一个 TL 或项目组长，你下属或组员的产出理论上都是你的产出，那自然觉得自己产出多。如果是某个技术问题的攻坚者，本来就是把难得的有技术挑战的事情交给你了，你自然觉得自己牛逼了，自己解决了困难的事情。但是换一个寻常 P7，甚至是换一个经验丰富些的 P6，他真的就一定做不出来吗？\n\n作为一个 TL，对团队真的有显著的帮助吗？还是只是做了一个路由器。作为一个技术专家，是真的有创新的技术突破吗？还是只是一个初级缝合怪。\n\n我觉得，**对于一个P7，最重要的就是「因你而不同」（当然领域专家还是基础要求）** 。团队今年因为你，技术氛围变得更好了，历史债务变的更少了，同事成长更快了，研发效能变的更高了，创新项目越来越多了，用户体验越来越好了，业务成功可能性越来越大了。不不可能要求什么都能做到，但总要有一两样做的超出预期吧。啥也没有，就是占着好位置，拿到了好结果，于是自己就牛逼了？那对其他同学就太不公平了。\n\n**只有「因你而不同」才能给团队带来更多的增量**。一个团队，最怕的就是一潭死水。每个人守着一亩三分地，总觉得自己的结果会因自己的负责的事情而定性。没人愿意去开垦荒漠，面对不确定性的问题不知所措。最终团队肯定是越来越往下走，有价值的事情越走越少。\n\nP7 同学在团队里永远应该是冲在最前面，面对最不确定的事情，给团队带增量，给他人更多信心。\n\n## 小结\n\n也没啥小结，祝大家新年快乐~'

const PostId: FC<IProps> = memo(() => {
  // 假数据
  const labels = ['java', 'spring Boot', 'Spring']
  const category = '前端'
  const column = 'javaWeb'
  const columnInfo = '前端react、next.js开发专项'
  const columnImgUrl = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95414745836549ce9143753e2a30facd~tplv-k3u1fbpfcp-no-mark:160:160:160:120.awebp'
  const postCoverUrl = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed8c2069849744f299b6c551600ac310~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?'

  const router = useRouter()
  const { id } = router.query
  // const { children } = props

  return (
        <div className="post-wrapper">
            <div className={styles.left}>

                <h1 className={styles['article-title']}>23年了，icon 方案该升级了 {id}</h1>

                <User/>

                {/* 此处width和height仅为适配组件必须属性，生效样式在less中体现 */}
                {postCoverUrl ? <Image src={postCoverUrl} alt={'文章封面'} width={200} height={200} className={styles.postCoverUrl}/> : null}
                <MarkDown value={content1}/>

                <div className={styles.articleEnd}>
                    <PostInfo labels={labels} category={category}/>
                    <Column column={column} columnInfo={columnInfo} columnImgUrl={columnImgUrl}/>
                    <Extension/>
                </div>
            </div>
            <div className={styles.right}>

                <PostAuthor/>

                <Banner src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/sign-in.d6891e5.png"
                        hasDesc={false} width={300} height={90}
                />
                <Banner hasDesc={false} width={300} height={250}/>

                <Related/>

                <Affix offsetTop={80}>
                    <div className={styles['article-catalog']}>
                        <PostTOC/>
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
