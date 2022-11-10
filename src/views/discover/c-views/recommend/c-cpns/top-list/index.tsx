import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopListWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/hooks'
import TopListItem from '../top-list-item'

interface IProps {
  children?: ReactNode
}

const TopList: FC<IProps> = () => {
  const ranking = useAppSelector((state) => state.recommend.ranking)
  return (
    <TopListWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {ranking.map((item) => {
          return <TopListItem key={item.id} itemData={item} />
        })}
      </div>
    </TopListWrapper>
  )
}

export default memo(TopList)
