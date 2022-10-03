import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

test('renders container properly', () => {
  render(<Home />, { wrapper: BrowserRouter })
  const containerTestID = screen.getByTestId('main-container')
  expect(containerTestID).toBeInTheDocument()
  const contentTestID = screen.getByTestId('main-container-main-content')
  expect(contentTestID).toBeInTheDocument()
})

test('renders Header title properly', () => {
  render(<Home />, { wrapper: BrowserRouter })
  const textFinded = screen.getByText('Github Users')
  expect(textFinded).toBeInTheDocument()
})
