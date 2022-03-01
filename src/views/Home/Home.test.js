import { AudioBuffer, Limiter, Synth, synthSounds } from 'tone'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

// jest.mock(new AudioBuffer(), () => {
//   return {
//     AudioBuffer: jest.fn().mockImplementation(() => {
//       return { toDestination: jest.fn() }
//     })
//   }
// })

// const limiter = new Limiter.toDestination()

// const synth = new Synth(synthSounds).toDestination()

// jest.mock('tone', () => {
//   return {
//     Synth: jest.fn(),
//     Limiter: jest.fn(),
//     synthSounds: jest.fn().mockImplementation(() => {
//       return { toDestination: jest.fn() }
//     })
//   }
// })
// jest.mock(new Synth(synthSounds), () => {
//   return {
//     Limiter: jest.fn().mockImplementation(() => {
//       return { toDestination: jest.fn() }
//     })
//   }
// })

// jest.mock('tone', () => {
//   return {
//     Synth: jest.fn(),
//     Limiter: jest.fn(),
//     AudioBuffer: jest.fn()
//   }
// })

jest.mock(Home)

it('properly renders the home view', () => {
  const container = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
