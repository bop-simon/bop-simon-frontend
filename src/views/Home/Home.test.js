import { AudioBuffer, Limiter, Synth, synthSounds } from 'tone'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

// jest.mock('tone'), () => {
//   return {
//     Limiter: jest.fn(),
//     AudioBuffer: jest.fn(),
//     Synth: jest.fn()
//     }
//   }

jest
  .spyOn(window.HTMLMediaElement.prototype, 'load')
  .mockImplementation(() => {})

jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => {})
jest.mock('tone', () => {
  return {
    Synth: jest.fn(),
    Limiter: jest.fn(),
    AudioBuffer: jest.fn()
  }
})

// figure out how to mock a Class

it('properly renders the home view', () => {
  const container = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
