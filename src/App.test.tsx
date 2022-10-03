import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders App properly', () => {
  render(<App />, { wrapper: BrowserRouter })
  const appClassName = screen.getByTestId('App')
  expect(appClassName).toBeInTheDocument()
})
