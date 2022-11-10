import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/hooks'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newestAlbum = [] } = useAppSelector(
    (state) => ({
      newestAlbum: state.recommend.newestAlbum
    }),
    shallowEqualApp
  )

  function handlePreClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1
        title="新碟上架"
        moreLink="/discover/album"
        moreText="更多"
      ></AreaHeaderV1>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePreClick}
        ></button>
        <div className="banner">
          <Carousel autoplay ref={carouselRef} speed={1500} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newestAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                      return (
                        <NewAlbumItem
                          key={item.id}
                          itemData={item}
                        ></NewAlbumItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
