import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Splash from './Splash'
import { MemoryRouter } from 'react-router-dom'

it('properly renders the splash view', () => {
<<<<<<< HEAD:src/views/Splash/Splash.test.js
  const container = render(<MemoryRouter><Splash /></MemoryRouter>)

=======
  const container = render(
    <MemoryRouter>
      <Splash />
    </MemoryRouter>
  )
>>>>>>> origin/production:src/components/Splash/Splash.test.js
  expect(container).toMatchSnapshot()
})
