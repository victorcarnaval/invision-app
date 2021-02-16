import { render, screen } from '@testing-library/react';
import SignInUp from './SignInUp';

test('renders welcome to invision', () => {
  render(<SignInUp />);
  const linkElement = screen.getByText(/welcome to invision/i);
  expect(linkElement).toBeInTheDocument();
});
