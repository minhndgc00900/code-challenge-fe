import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import * as hooks from '../../shared/hooks/useTable';
import Wishlist from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => {},
}));

const handleStateQuery = () => {
  return;
};

// handle change pagination and sort
const handleChangeQuery = () => {
  return;
};

describe('Wishlist List', () => {
  const { spellListResponse } = require('../../mocks/mockFetch');

  jest.spyOn(hooks, 'default').mockImplementation(() => ({
    records: spellListResponse,
    isLoading: false,
    setStateQuery: handleStateQuery,
    handleChange: handleChangeQuery,
    queries: undefined,
    pagination: {},
    stateQuery: {},
  }));

  test('Not to be empty', async () => {
    render(<Wishlist />);
    const __wishlistTable = await screen.findByTestId('__wishlist');
    expect(__wishlistTable.querySelectorAll('tr').length).toBeGreaterThan(1);
  });
});

describe('Wishlist no data', () => {
  test('To show empty description (except header)', async () => {
    render(<Wishlist />);
    const __wishlist = await screen.findByTestId('__wishlist');
    expect(
      __wishlist.getElementsByClassName('ant-empty-description').length,
    ).toBe(1);
  });
});
