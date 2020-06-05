import React from 'react'
import { render } from '@testing-library/react'
import DemoComponent from './DemoComponent'

describe('DemoComponent', () => {
  it('能否正常渲染', () => {
    const wrapper = render(<DemoComponent title="DemoComponent" />)
    const element = wrapper.getByText('DemoComponent')
    expect(element).toBeInTheDocument()
  })
})
