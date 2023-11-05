import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { checkText } from 'utils/tests/checkFunctions';
import MainLayout from 'layout/MainLayout/MainLayout';

test('MainLayout | Render', (): void => {
  render(
    <MemoryRouter>
      <MainLayout />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Шапка сайта/i];

  checkText(pageElements);
});
