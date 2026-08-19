// The map registry. This is the single source of truth for which games and maps
// exist on the site. To add a map (or a whole game), add it here — pages are
// generated from this list automatically.

export interface GameMap {
  id: string; // kebab-case, used in URLs and guide frontmatter
  name: string;
}

export interface Game {
  id: string; // kebab-case, used in URLs and guide frontmatter
  name: string;
  shortName: string;
  year: number;
  maps: GameMap[];
}

export const GAMES: Game[] = [
  {
    id: 'waw',
    name: 'World at War',
    shortName: 'WAW',
    year: 2008,
    maps: [
      { id: 'nacht-der-untoten', name: 'Nacht der Untoten' },
      { id: 'verruckt', name: 'Verrückt' },
      { id: 'shi-no-numa', name: 'Shi No Numa' },
      { id: 'der-riese', name: 'Der Riese' },
    ],
  },
  {
    id: 'bo1',
    name: 'Black Ops',
    shortName: 'BO1',
    year: 2010,
    maps: [
      { id: 'kino-der-toten', name: 'Kino der Toten' },
      { id: 'five', name: '"Five"' },
      { id: 'ascension', name: 'Ascension' },
      { id: 'call-of-the-dead', name: 'Call of the Dead' },
      { id: 'shangri-la', name: 'Shangri-La' },
      { id: 'moon', name: 'Moon' },
    ],
  },
  {
    id: 'bo2',
    name: 'Black Ops II',
    shortName: 'BO2',
    year: 2012,
    maps: [
      { id: 'tranzit', name: 'TranZit' },
      { id: 'nuketown-zombies', name: 'Nuketown Zombies' },
      { id: 'die-rise', name: 'Die Rise' },
      { id: 'mob-of-the-dead', name: 'Mob of the Dead' },
      { id: 'buried', name: 'Buried' },
      { id: 'origins', name: 'Origins' },
    ],
  },
  {
    id: 'bo3',
    name: 'Black Ops III',
    shortName: 'BO3',
    year: 2015,
    maps: [
      { id: 'shadows-of-evil', name: 'Shadows of Evil' },
      { id: 'the-giant', name: 'The Giant' },
      { id: 'der-eisendrache', name: 'Der Eisendrache' },
      { id: 'zetsubou-no-shima', name: 'Zetsubou No Shima' },
      { id: 'gorod-krovi', name: 'Gorod Krovi' },
      { id: 'revelations', name: 'Revelations' },
    ],
  },
  {
    id: 'bo4',
    name: 'Black Ops 4',
    shortName: 'BO4',
    year: 2018,
    maps: [
      { id: 'voyage-of-despair', name: 'Voyage of Despair' },
      { id: 'ix', name: 'IX' },
      { id: 'blood-of-the-dead', name: 'Blood of the Dead' },
      { id: 'classified', name: 'Classified' },
      { id: 'dead-of-the-night', name: 'Dead of the Night' },
      { id: 'ancient-evil', name: 'Ancient Evil' },
      { id: 'alpha-omega', name: 'Alpha Omega' },
      { id: 'tag-der-toten', name: 'Tag der Toten' },
    ],
  },
  {
    id: 'cw',
    name: 'Cold War',
    shortName: 'CW',
    year: 2020,
    maps: [
      { id: 'die-maschine', name: 'Die Maschine' },
      { id: 'firebase-z', name: 'Firebase Z' },
      { id: 'outbreak', name: 'Outbreak' },
      { id: 'mauer-der-toten', name: 'Mauer der Toten' },
      { id: 'forsaken', name: 'Forsaken' },
    ],
  },
  {
    id: 'bo6',
    name: 'Black Ops 6',
    shortName: 'BO6',
    year: 2024,
    maps: [
      { id: 'terminus', name: 'Terminus' },
      { id: 'liberty-falls', name: 'Liberty Falls' },
      { id: 'citadelle-des-morts', name: 'Citadelle des Morts' },
      { id: 'the-tomb', name: 'The Tomb' },
      { id: 'shattered-veil', name: 'Shattered Veil' },
      { id: 'reckoning', name: 'Reckoning' },
    ],
  },
  {
    id: 'bo7',
    name: 'Black Ops 7',
    shortName: 'BO7',
    year: 2025,
    // Add new BO7 maps here as they release.
    maps: [{ id: 'ashes-of-the-damned', name: 'Ashes of the Damned' }],
  },
];

export const GAME_IDS = GAMES.map((g) => g.id) as [string, ...string[]];

export function getGame(id: string): Game | undefined {
  return GAMES.find((g) => g.id === id);
}

export function getMap(gameId: string, mapId: string): GameMap | undefined {
  return getGame(gameId)?.maps.find((m) => m.id === mapId);
}

// Guide types. `unique: true` means one canonical guide per map — readers send
// change requests against it instead of submitting competing guides. Only
// high-round strategies are open-ended.
export const GUIDE_TYPES = [
  { id: 'map-guide', name: 'Map Guide', unique: true },
  { id: 'easter-egg', name: 'Easter Egg', unique: true },
  { id: 'high-round', name: 'High Round', unique: false },
  { id: 'relic', name: 'Relic Guide', unique: true },
] as const;

export type GuideTypeId = (typeof GUIDE_TYPES)[number]['id'];

export const GUIDE_TYPE_IDS = GUIDE_TYPES.map((t) => t.id) as [string, ...string[]];

export function getGuideType(id: string) {
  return GUIDE_TYPES.find((t) => t.id === id);
}
