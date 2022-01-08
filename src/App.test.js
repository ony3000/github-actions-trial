import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('random number test', () => {
  const randomNumber = Math.random();
  expect(randomNumber).toBeLessThan(Math.SQRT1_2);
});
