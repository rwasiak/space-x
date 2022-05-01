/* eslint-disable */
import { render as rtlRender } from '@testing-library/react';

const customRender = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
