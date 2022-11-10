import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchRecommendDataAction,
  fetchTopListDataAction
} from './store/recommend'
import { useAppDispatch } from '@/hooks'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopList from './c-cpns/top-list'
import UserLogin from './c-cpns/user-login'
import HotAnchor from './c-cpns/hot-anchor'
import SettleSinger from './c-cpns/settle-singer'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchTopListDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopList />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
