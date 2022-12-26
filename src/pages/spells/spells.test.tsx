import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import * as hooks from '../../shared/hooks/useTable';
import PortalPage from '.';

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

describe('Spell List', () => {
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
    render(<PortalPage />);
    const __spellTable = await screen.findByTestId('__spells');
    expect(__spellTable.querySelectorAll('tr').length).toBeGreaterThan(1);
  });
});

describe('Spell List no data', () => {
  jest.spyOn(hooks, 'default').mockImplementation(() => ({
    records: [],
    isLoading: false,
    setStateQuery: handleStateQuery,
    handleChange: handleChangeQuery,
    queries: undefined,
    pagination: {},
    stateQuery: {},
  }));

  test('To show empty description (except header)', async () => {
    render(<PortalPage />);
    const __spellTable = await screen.findByTestId('__spells');
    expect(
      __spellTable.getElementsByClassName('ant-empty-description').length,
    ).toBe(1);
  });
});
