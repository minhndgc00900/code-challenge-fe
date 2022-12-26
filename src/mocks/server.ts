import { setupServer } from 'msw/node';
import { handlers } from './mockFetch';

export const server = setupServer(...handlers);
