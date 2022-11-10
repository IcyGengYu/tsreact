import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import type { IHotRecommendItem } from '@/views/discover/c-views/recommend/store/type'
import { formatCount, getImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  itemData: IHotRecommendItem
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" srcSet="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom"> {itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
