import { Homepage } from './Homepage';
import { render, screen } from '../../tests/test-utils';
import { test, expect, describe } from 'vitest';

describe('Homepage component', () => {
  test('Should render content', () => {
    render(<Homepage />);

    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
