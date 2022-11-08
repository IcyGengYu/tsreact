import React, { ElementRef, memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  TopBannerWrapper
} from './style'
import { shallowEqualApp, useAppSelector } from '@/hooks'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // 事件处理函数
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  // function handleBeforeChange(from: any, to: any) {
  //   // setCurrentIndex(-1)
  //   console.log(from)
  //   console.log(to)
  // }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  // 获取背景图片

  let bgImageUrl
  if (banners.length > 0) {
    bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  }
  return (
    <TopBannerWrapper
      style={{ background: `url(${bgImageUrl}) center center / 6000px` }}
    >
      <div className="banner wrap-v1">
        <BannerLeft>
          <Carousel
            effect="fade"
            ref={bannerRef}
            dots={false}
            afterChange={(current) => handleAfterChange(current)}
            autoplay
          >
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img src={item.imageUrl} className="image" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)
