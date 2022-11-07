import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <div>主播电台</div>
}

export default memo(Djradio)
