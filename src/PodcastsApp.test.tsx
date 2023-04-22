import { render, screen } from '@testing-library/react';
import { PodcastsApp } from './PodcastsApp';

test('renders learn react link', () => {
  render(<PodcastsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
