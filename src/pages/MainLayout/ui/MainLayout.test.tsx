import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { checkText } from 'utils/tests/checkFunctions';

import MainLayout from './MainLayout';

test('MainLayout | Render', (): void => {
  render(
    <MemoryRouter>
      <MainLayout />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Шапка сайта/i];

  checkText(pageElements);
});
