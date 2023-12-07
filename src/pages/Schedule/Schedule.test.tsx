import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import Schedule from 'pages/Schedule/Schedule';
import { checkText } from 'utils/tests/checkFunctions';

test('Schedule | Render', (): void => {
  render(
    <MemoryRouter>
      <Schedule />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/Нажать 1/i, /Нажать 2/i, /Нажать 3/i];

  checkText(pageElements);
});
