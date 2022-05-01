/* eslint-disable */
import { server } from './mocks/server';
import '@testing-library/jest-dom';

// @ts-expect-error
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
