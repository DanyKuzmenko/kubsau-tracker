import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { checkText } from 'utils/tests/checkFunctions';
import Schedule from 'pages/Schedule/Schedule';

test('Schedule | Render', (): void => {
  render(
    <MemoryRouter>
      <Schedule />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Нажать 1/i, /Нажать 2/i, /Нажать 3/i];

  checkText(pageElements);
});
