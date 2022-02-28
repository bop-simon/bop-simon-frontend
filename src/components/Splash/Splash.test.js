import { render } from '@testing-library/react'
import Splash from './Splash'

it('properly renders the splash view', () => {
  const container = render(<Splash />)

  expect(container).toMatchSnapshot()
})
