import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Splash from './Splash'

it('properly renders the splash view', () => {
  const app = render(<MemoryRouter><Splash /></MemoryRouter>)

  expect(container).toMatchSnapshot()
})
