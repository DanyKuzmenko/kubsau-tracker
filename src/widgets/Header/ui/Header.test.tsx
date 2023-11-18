import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { checkText } from 'utils/tests/checkFunctions';

import { HeaderWidget as Header } from './Header';

test('Header | Render', (): void => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Шапка сайта/i];

  checkText(pageElements);
});
