import { render } from '@testing-library/react'
import Splash from './Splash'
import { MemoryRouter } from 'react-router-dom'

it('properly renders the splash view', () => {
  const container = render(
    <MemoryRouter>
      <Splash />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
