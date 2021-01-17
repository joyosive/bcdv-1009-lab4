import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders greetings', () => {
  render(<App />);
  expect(screen.getByText(/Hello Welcome to Lab4 By Joy and Natasha/i)).toBeInTheDocument();
});
