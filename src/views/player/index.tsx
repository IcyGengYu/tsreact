import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapper } from './style'
import PlayerBar from './player-bar'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <PlayerWrapper>
      <PlayerBar></PlayerBar>
    </PlayerWrapper>
  )
}

export default memo(Player)
