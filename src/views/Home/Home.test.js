import Home from './Home'
import Game from '../../components/Game/Game'
import FreePlay from '../../components/FreePlay/FreePlay'
import React from 'react'
import * as Tone from 'tone'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

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

it('properly renders the home view', () => {
  const container = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('calls onClick when c2 hex is clicked', () => {
  const handleClick = Tone.Synth.mock

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByLabelText(/c2/i))
  expect(handleClick.calls.length).toBe(2)
})

it('properly renders the Game component', () => {
  const container = render(
    <MemoryRouter>
      <Game />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('properly renders the FreePlay component', () => {
  const container = render(
    <MemoryRouter>
      <FreePlay />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
