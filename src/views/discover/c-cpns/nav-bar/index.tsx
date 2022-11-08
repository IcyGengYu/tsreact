import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarWrapper from './style'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div key={item.title} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
