import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Demo: FC<IProps> = (props) => {
  console.log(props.children)
  return (
    <div className="discover">
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.height}</div>
    </div>
  )
}

// Demo.defaultProps = {
//   height: 1.88
// }

// 直接对props进行类型约束
// const Demo = (props: IProps) => {
//   return (
//     <div className="discover">
//       <div>{props.name}</div>
//       <div>{props.age}</div>
//       <div>{props.height}</div>
//     </div>
//   )
// }

export default memo(Demo)
