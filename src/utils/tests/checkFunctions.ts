import { screen } from '@testing-library/react';

export function checkText(elements: (RegExp | string)[]): void {
  elements.forEach((element: RegExp | string) => {
    expect(screen.getByText(element)).toBeInTheDocument();
  });
}

export function checkLabelText(elements: (RegExp | string)[]): void {
  elements.forEach((element: RegExp | string) => {
    expect(screen.getByLabelText(element)).toBeInTheDocument();
  });
}

export function checkMissingText(elements: (RegExp | string)[]): void {
  elements.forEach((element: RegExp | string) => {
    expect(screen.queryByText(element)).toBeNull();
  });
}
