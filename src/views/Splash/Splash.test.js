import { render } from '@testing-library/react'
import Splash from './Splash'

it('properly renders the splash view', () => {
  const app = render(<Splash />)

  expect(container).toMatchSnapshot()
})
