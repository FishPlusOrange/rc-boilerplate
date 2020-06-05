import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoComponent from './DemoComponent'

const TestDemoComponent = () => {
  return <DemoComponent title="DemoComponent" />
}

storiesOf('DemoComponent', null).add('Test', TestDemoComponent)
