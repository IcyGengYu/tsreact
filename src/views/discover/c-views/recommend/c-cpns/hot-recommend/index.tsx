import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/hooks'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const hotRecommend = useAppSelector(
    (state) => state.recommend.hotRecommend,
    shallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        title="热门推荐"
        moreText="更多"
        moreLink="/discover/playlist"
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
