import React from 'react'
import { storiesOf } from '@storybook/react'
import Test from './Test'

const DefaultTest = () => {
  return <Test title="Test" />
}

storiesOf('Test', module).add('Default', DefaultTest)
