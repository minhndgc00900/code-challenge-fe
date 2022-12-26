import { rest } from 'msw';

export const spellListResponse = [
  {
    index: 'acid-arrow',
    name: 'Acid Arrow',
    url: '/api/spells/acid-arrow',
  },
  {
    index: 'acid-splash',
    name: 'Acid Splash',
    url: '/api/spells/acid-splash',
  },
];

export const spellDetailResponse = {
  index: 'aid',
  name: 'Aid',
  desc: ['Your spell bolsters your allies with toughness and'],
  higher_level: [
    'When you cast this spell using a spell slot of 3rd level or higher',
  ],
  range: '30 feet',
  components: ['V', 'S', 'M'],
  material: 'A tiny strip of white cloth.',
  ritual: false,
  duration: '8 hours',
  concentration: false,
  casting_time: '1 action',
  level: 2,
  heal_at_slot_level: {
    '2': '5',
    '3': '10',
    '4': '15',
    '5': '20',
    '6': '25',
    '7': '30',
    '8': '35',
    '9': '40',
  },
  school: {
    index: 'abjuration',
    name: 'Abjuration',
    url: '/api/magic-schools/abjuration',
  },
  classes: [
    { index: 'cleric', name: 'Cleric', url: '/api/classes/cleric' },
    { index: 'paladin', name: 'Paladin', url: '/api/classes/paladin' },
  ],
  subclasses: [{ index: 'lore', name: 'Lore', url: '/api/subclasses/lore' }],
  url: '/api/spells/aid',
};

export const handlers = [
  rest.get(`${process.env.REACT_APP_URL}/spells/aid`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(spellDetailResponse));
  }),
  rest.get(`${process.env.REACT_APP_URL}/spells`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(spellListResponse));
  }),
];
