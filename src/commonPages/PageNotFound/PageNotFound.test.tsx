import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

test('PageNotFound | Render', (): void => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  );

  expect(screen.getByText(/Данная страница не найдена/i)).toBeInTheDocument();
});
