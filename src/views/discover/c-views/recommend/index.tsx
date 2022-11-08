import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import iyRequest from '@/service'

interface IProps {
  children?: ReactNode
}
export interface IBannerData {
  imageUrl: string
  targetId: number
  adid?: any
  targetType: number
  titleColor: string
  typeTitle: string
  url?: any
  exclusive: boolean
  monitorImpress?: any
  monitorClick?: any
  monitorType?: any
  monitorImpressList?: any
  monitorClickList?: any
  monitorBlackList?: any
  extMonitor?: any
  extMonitorInfo?: any
  adSource?: any
  adLocation?: any
  adDispatchJson?: any
  encodeId: string
  program?: any
  event?: any
  video?: any
  song?: any
  scm: string
  bannerBizType: string
}
const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    iyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item) => {
        return (
          <div key={item.imageUrl}>
            <div>{item.typeTitle}</div>
            <div>{item.imageUrl}</div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(Recommend)
