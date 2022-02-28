import { BrowserRouter, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import RoutesComponent from './components/RoutesComponent/RoutesComponent'
import Theme from './context/Theme.js'
import MenuBar from './components/MenuBar/MenuBar'
export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <MenuBar />
          <Routes>
            <RoutesComponent />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
