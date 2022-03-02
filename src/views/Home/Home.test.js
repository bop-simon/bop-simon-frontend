import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import React from 'react'
import * as Tone from 'tone'

jest.mock('tone', () => {
  return {
    Synth: jest.fn().mockImplementation(function () {
      return {
        chain: () => ({
          toDestination: () => {},
          triggerAttackRelease: jest.fn()
        })
      }
    }),
    Limiter: function () {
      return { chain: () => {} }
    },
    AudioBuffer: jest.fn(),
    Frequency: jest.fn()
  }
})

it.skip('properly renders the home view', () => {
  const container = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('calls onClick prop when clicked', () => {
  const handleClick = Tone.Synth.mock

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByLabelText(/c2/i))
  expect(handleClick.calls.length).toBeGreaterThan(1)
})
