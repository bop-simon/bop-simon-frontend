import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Splash from './Splash'

it('properly renders the splash view', () => {
  const container = render(<MemoryRouter><Splash /></MemoryRouter>)

  expect(container).toMatchSnapshot()
})
