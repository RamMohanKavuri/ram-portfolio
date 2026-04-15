import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByText(/skills/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
  expect(screen.getByText(/let's connect/i)).toBeInTheDocument();
});