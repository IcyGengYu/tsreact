import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Toplist: FC<IProps> = () => {
  return <div>排行榜</div>
}

export default memo(Toplist)
