import { render, screen } from '@testing-library/react';
import { PodtunesApp } from './PodtunesApp';

test('renders learn react link', () => {
  render(<PodtunesApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
