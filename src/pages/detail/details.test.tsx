import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SpellDetail from '.';
import * as hooks from '../../shared/hooks/useSpellDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: `${window.location.hostname}/spells/detail`,
  }),
}));

describe('SpellDetail', () => {
  const { spellDetailResponse } = require('../../mocks/mockFetch');

  jest.spyOn(hooks, 'default').mockImplementation(() => ({
    records: spellDetailResponse,
    isLoading: false,
  }));

  test('display level', async () => {
    render(<SpellDetail />);
    const __level = await screen.findByTestId('__level');
    expect(__level).toHaveTextContent('2');
  });

  test('display name', async () => {
    render(<SpellDetail />);
    const __spellName = await screen.findByTestId('__spellName');

    expect(__spellName).toHaveTextContent('Aid');
  });

  test('display casting time', async () => {
    render(<SpellDetail />);
    const __castingTime = await screen.findByTestId('__castingTime');
    expect(__castingTime).toHaveTextContent('1 action');
  });

  test('display range', async () => {
    render(<SpellDetail />);
    const __range = await screen.findByTestId('__range');

    expect(__range).toHaveTextContent('30 feet');
  });

  test('display components', async () => {
    render(<SpellDetail />);
    const __components = await screen.findByTestId('__components');
    expect(__components).toHaveTextContent('V, S, M');
  });

  test('display duration', async () => {
    render(<SpellDetail />);
    const __duration = await screen.findByTestId('__duration');

    expect(__duration).toHaveTextContent('8 hours');
  });

  test('display school', async () => {
    render(<SpellDetail />);
    const __school = await screen.findByTestId('__school');
    expect(__school).toHaveTextContent('Abjuration');
  });

  test('display attack', async () => {
    render(<SpellDetail />);
    const __attack = await screen.findByTestId('__attack');
    expect(__attack).toBeEmptyDOMElement();
  });

  test('display damage', async () => {
    render(<SpellDetail />);
    const __damage = await screen.findByTestId('__damage');
    expect(__damage).toBeEmptyDOMElement();
  });

  test('display description', async () => {
    render(<SpellDetail />);
    const __desc = await screen.findByTestId('__desc0');

    expect(__desc).toHaveTextContent(
      /Your spell bolsters your allies with toughness and/,
    );
  });

  test('display class', async () => {
    render(<SpellDetail />);
    const __class = await screen.findByTestId('__class0');
    expect(__class).toHaveTextContent('Cleric');
  });
});
