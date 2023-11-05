import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { checkText } from 'utils/tests/checkFunctions';
import { Header } from './Header';

test('Header | Render', (): void => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Шапка сайта/i];

  checkText(pageElements);
});
