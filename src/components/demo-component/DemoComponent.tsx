import React from 'react'
import { DemoComponentProps } from './interface'

const DemoComponent: React.FC<DemoComponentProps> = (props) => {
  const { title } = props
  return <div className="rc-demo-component">{title}</div>
}

export default DemoComponent
