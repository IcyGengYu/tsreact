import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    moreLink = '/',
    title = '默认标题',
    keywords = [],
    moreText = '更多'
  } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left ">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                {index + 1 < keywords.length && <Divider type="vertical" />}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
