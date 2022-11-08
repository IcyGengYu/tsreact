import React, { PureComponent, ReactNode } from 'react'
interface IProps {
  name: string
  age: number
}
interface IState {
  message: string
}
class demo02 extends PureComponent<IProps, IState> {
  state = {
    message: 'hello'
  }

  render(): ReactNode {
    return (
      <div>
        {this.props.name}====={this.props.age}
        message: {this.state.message}
      </div>
    )
  }
}
export default demo02
