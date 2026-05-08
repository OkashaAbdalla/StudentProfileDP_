import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the student profile directory title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', {
    name: /student profile directory/i,
  });
  expect(titleElement).toBeInTheDocument();
});
