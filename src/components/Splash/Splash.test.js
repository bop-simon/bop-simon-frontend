import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Splash from './Splash'

it('properly renders the splash view', () => {
  const container = render(
    <MemoryRouter>
      <Splash />
    </MemoryRouter>
  )
  const welcome = screen.getByLabelText(/Welcome/i)
  const clickAnywhere = screen.getByLabelText(/clickAnywhere/i)
  expect(welcome).toBeInTheDocument()
  expect(clickAnywhere).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
