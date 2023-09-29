import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from 'commonPages/PageNotFound/PageNotFound';
import { checkText } from 'utils/tests/checkFunctions';

test('PageNotFound | Render', (): void => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>,
  );

  const pageElements: RegExp[] = [/Данная страница не найдена/i];

  checkText(pageElements);
});
