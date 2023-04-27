import { render, screen } from '@testing-library/react';
import { PodTunesApp } from './PodTunesApp';

test('renders learn react link', () => {
  render(<PodTunesApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
