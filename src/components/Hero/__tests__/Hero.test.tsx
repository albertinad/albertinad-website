import { renderWithIntl } from 'tests/i18n';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders the first name', () => {
    const { getByText } = renderWithIntl(<Hero />);
    expect(getByText('Albertina')).toBeInTheDocument();
  });

  it('renders the last name', () => {
    const { getByText } = renderWithIntl(<Hero />);
    expect(getByText('Durante')).toBeInTheDocument();
  });
});
