const BODY_PARTS = ['head', 'eyes', 'horns', 'body', 'wings', 'arms', 'legs', 'tail', 'spikes', 'skin'];
const DRAGON_TYPES = ['water', 'fire', 'air', 'earth', 'cyber'];
const GENE_VA = [
  ['sewage', 'aqueous', 'ice', 'swamp', 'slime', 'oil', 'poison', 'abyss', 'tritium', 'quicksilver'],
  ['ashed', 'charred', 'flaming', 'molten', 'sparkling', 'firework', 'solar', 'laser', 'plasma', 'volcanic'],
  ['miasma', 'wind', 'smoke', 'whirlwind', 'nebulous', 'bubble', 'jet', 'dust', 'cyclone', 'cosmic'],
  ['mud', 'stone', 'copper', 'malachite', 'sand', 'steel', 'marble', 'platinum', 'obsidian', 'uranium'],
  ['cursed', 'hypnotic', 'alchemical', 'twilight', 'arcane', 'voodoo', 'necromantic', 'enchanted', 'divine', 'demonic']
];
const DOMINANTS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const RECESSIVES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const COOL_SCORE = [0.5, 1.2, 1.2, 1.2, 1.2, 1.6, 1.6, 1.6, 2.8, 2.8];

// [attack, defense, stamina, speed, intelligence]
const SKILLS_FACTOR = {
  BODY_PART: [
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 1]
  ],
  DRAGON_TYPE: [
    [10, 15, 10, 10, 10],
    [10, 10, 10, 15, 10],
    [15, 10, 10, 10, 10],
    [10, 10, 15, 10, 10],
    [10, 10, 10, 10, 15]
  ],
  GENE_VA: [
    [5, 15, 10, 10, 10, 20, 10, 10, 40, 10],
    [5, 15, 15, 10, 10, 20, 20, 10, 40, 10],
    [5, 10, 15, 15, 10, 20, 20, 20, 40, 40],
    [5, 10, 10, 15, 15, 10, 20, 20, 10, 40],
    [5, 10, 10, 10, 15, 10, 10, 20, 10, 40]
  ]
};

module.exports = {
  BODY_PARTS,
  DRAGON_TYPES,
  GENE_VA,
  DOMINANTS,
  RECESSIVES,
  COOL_SCORE,
  SKILLS_FACTOR
};
