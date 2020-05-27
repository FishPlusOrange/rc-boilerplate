import React from 'react'
import { TestProps } from './interface'

const Test: React.FC<TestProps> = (props) => {
  const { title } = props
  return <div className="rc-test">{title}</div>
}

export default Test
