import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import RoutesComponent from './components/RoutesComponent/RoutesComponent'
import Theme from './context/Theme.js'

export default function App() {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<RoutesComponent />
				</BrowserRouter>
			</ThemeProvider>
		</>
	)
}
