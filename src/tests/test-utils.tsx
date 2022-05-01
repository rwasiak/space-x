/* eslint-disable */
import { render as rtlRender } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

function Wrapper({ children }: { children: ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

const customRender = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
