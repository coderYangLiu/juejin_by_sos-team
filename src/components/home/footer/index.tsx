import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './index.module.less'

import policeImg from '@/assets/images/police.png'
import wechatImg from '@/assets/images/wechat.png'
import weiboImg from '@/assets/images/weibo.png'
import juejinImg from '@/assets/images/juejin-qr.jpeg'

export interface IProps {
  children?: ReactElement
}

const HomeFooter: FC<IProps> = memo(() => {
  return (
    <div className={styles.footer}>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="/terms">用户协议</Link>
        </li>
        <li className={styles.item}>
          <Link href="/license">营业执照</Link>
        </li>
        <li className={styles.item}>
          <Link href="/privacy">隐私政策</Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">关于我们</Link>
        </li>
      </ul>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="/map-author-A-1">站点地图</Link>
        </li>
        <li className={styles.item}>
          <Link href="/book/5c90640c5188252d7941f5bb">使用指南</Link>
        </li>
        <li className={styles.item}>
          <Link href="/links" rel="">
            友情链接
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/more_posts">
            更多文章
          </Link>
        </li>
      </ul>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="https://beian.miit.gov.cn">京ICP备18012699号-3</Link>
        </li>
      </ul>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="/icp">京ICP证：京B2-20191272</Link>
        </li>
      </ul>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719">
            <Image src={policeImg} alt="police" />
            京公网安备11010802026719号
          </Link>
        </li>
        <li className={styles.item}>
          <span>版权所有：北京北比信息技术有限公司</span>
        </li>
        <li className={styles.item}>
          <span>公司地址：北京市海淀区信息路甲28号13层B座13B-5</span>
        </li>
        <li className={styles.item}>
          <span>公司座机：010-83434395</span>
        </li>
        <li className={styles.item}>
          <span>
            举报邮箱：
            <Link href="mailto:feedback@xitu.io">feedback@xitu.io</Link>
          </span>
        </li>
      </ul>
      <ul className={styles['more-list']}>
        <li className={styles.item}>
          <Link href="https://juejin.cn">©2023 稀土掘金</Link>
        </li>
      </ul>

      <ul className={classNames(styles['more-list'], styles['account-list'])}>
        <li className={classNames(styles.item, styles.weibo)}>
          <Link href="http://weibo.com/xitucircle">
            <Image src={weiboImg} alt="微博" className={styles.icon} />
          </Link>
        </li>
        <li className={classNames(styles.item, styles.wechat)}>
          <Image src={wechatImg} alt="微信" className={styles.icon} />
          <div className={styles['qr-panel']}>
            <div className={styles.title}>微信扫一扫</div>
            <Image src={juejinImg} alt="稀土掘金" className={styles.qr} />
          </div>
        </li>
      </ul>
    </div>
  )
})

HomeFooter.displayName = 'HomeFooter'
export default HomeFooter
