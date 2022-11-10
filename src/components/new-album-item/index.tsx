import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import type { INewestAlbumItem } from '@/views/discover/c-views/recommend/store/type'
import { getImageSize } from '@/utils'
interface IProps {
  children?: ReactNode
  itemData: INewestAlbumItem
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
