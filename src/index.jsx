import React from 'react'
import App from './App'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
