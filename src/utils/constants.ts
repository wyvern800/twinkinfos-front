// Used to determinate the item slots
export const equipment = [
  'head',
  'neck',
  'shoulder',
  'back',
  'chest',
  'wrist',
  'hands',
  'waist',
  'legs',
  'feet',
  'finger1',
  'finger2',
  'trinket1',
  'trinket2',
  'mainHand',
  'offHand',
  'relic',
  'ranged',
];


export const allBuilds = [
  {
    id: 75,
    alias: 'build gyga',
    notes: null,
    className: 'Hunter',
    hordeRace: 'Orc',
    allianceRace: 'Human',
    bracket: 'NINETEEN',
    createdAt: '2023-11-11T22:04:32.378Z',
    updatedAt: '2023-11-11T22:04:32.378Z',
    user: {
      id: 'ad60f4db-c0b4-4278-9437-e4de778e9003',
      role: 2,
      username: 'admin',
    },
    _id: '654ffa72d586d1f3e8258b6c',
    head: {
      items: [
        {
          type: 'hordeItem',
          itemId: 19972,
          name: 'Lucky Fishing Hat',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_helmet_31.jpg',
          class: 'Armor',
          subclass: 'Cloth',
          sellPrice: 3396,
          quality: 'Uncommon',
          itemLevel: 40,
          requiredLevel: 0,
          slot: 'Head',
          tooltip: [
            {
              label: 'Lucky Fishing Hat',
            },
            {
              label: 'Phase 1',
              format: 'alignRight',
            },
            {
              label: 'Item Level 40',
              format: 'Misc',
            },
            {
              label: 'Binds when picked up',
            },
            {
              label: 'Head',
            },
            {
              label: 'Cloth',
              format: 'alignRight',
            },
            {
              label: '43 Armor',
            },
            {
              label: '+15 Stamina',
            },
            {
              label: 'Durability 45 / 45',
            },
            {
              label: 'Requires Fishing (1)',
            },
            {
              label: 'Equip: Fishing skill increased by 5.',
              format: 'Uncommon',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink:
            '|cff1eff00|Hitem:19972::::::::::0|h[Lucky Fishing Hat]|h|r',
          contentPhase: 1,
          source: {
            category: 'Quest',
            quests: [
              {
                questId: 8221,
                name: "Rare Fish - Keefer's Angelfish",
                faction: 'Both',
              },
            ],
          },
          uniqueName: 'lucky-fishing-hat',
          notes: 'horde main item test',
        },
        {
          type: 'allianceItem',
          itemId: 4385,
          name: 'Green Tinted Goggles',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_helmet_47.jpg',
          class: 'Armor',
          subclass: 'Cloth',
          sellPrice: 1410,
          quality: 'Uncommon',
          itemLevel: 30,
          requiredLevel: 0,
          slot: 'Head',
          createdBy: [
            {
              amount: [1, 1],
              requiredSkill: 150,
              category: 'Engineering',
              reagents: [
                {
                  itemId: 2319,
                  amount: 4,
                },
                {
                  itemId: 1206,
                  amount: 2,
                },
                {
                  itemId: 4368,
                  amount: 1,
                },
              ],
              recipes: [],
            },
          ],
          tooltip: [
            {
              label: 'Green Tinted Goggles',
            },
            {
              label: 'Phase 1',
              format: 'alignRight',
            },
            {
              label: 'Item Level 30',
              format: 'Misc',
            },
            {
              label: 'Binds when equipped',
            },
            {
              label: 'Head',
            },
            {
              label: 'Cloth',
              format: 'alignRight',
            },
            {
              label: '35 Armor',
            },
            {
              label: '+8 Stamina',
            },
            {
              label: '+7 Spirit',
            },
            {
              label: 'Durability 45 / 45',
            },
            {
              label: 'Requires Engineering (150)',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink:
            '|cff1eff00|Hitem:4385::::::::::0|h[Green Tinted Goggles]|h|r',
          contentPhase: 1,
          uniqueName: 'green-tinted-goggles',
          notes: 'cfshudsu',
        },
      ],
      alternatives: [
        {
          itemId: 4385,
          name: 'Green Tinted Goggles',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_helmet_47.jpg',
          class: 'Armor',
          subclass: 'Cloth',
          sellPrice: 1410,
          quality: 'Uncommon',
          itemLevel: 30,
          requiredLevel: 0,
          slot: 'Head',
          createdBy: [
            {
              amount: [1, 1],
              requiredSkill: 150,
              category: 'Engineering',
              reagents: [
                {
                  itemId: 2319,
                  amount: 4,
                },
                {
                  itemId: 1206,
                  amount: 2,
                },
                {
                  itemId: 4368,
                  amount: 1,
                },
              ],
              recipes: [],
            },
          ],
          tooltip: [
            {
              label: 'Green Tinted Goggles',
            },
            {
              label: 'Phase 1',
              format: 'alignRight',
            },
            {
              label: 'Item Level 30',
              format: 'Misc',
            },
            {
              label: 'Binds when equipped',
            },
            {
              label: 'Head',
            },
            {
              label: 'Cloth',
              format: 'alignRight',
            },
            {
              label: '35 Armor',
            },
            {
              label: '+8 Stamina',
            },
            {
              label: '+7 Spirit',
            },
            {
              label: 'Durability 45 / 45',
            },
            {
              label: 'Requires Engineering (150)',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink:
            '|cff1eff00|Hitem:4385::::::::::0|h[Green Tinted Goggles]|h|r',
          contentPhase: 1,
          uniqueName: 'green-tinted-goggles',
          type: 'hordeItem',
          notes: 'test horde note alt 1',
          priority: 1,
        },
        {
          itemId: 19972,
          name: 'Lucky Fishing Hat',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_helmet_31.jpg',
          class: 'Armor',
          subclass: 'Cloth',
          sellPrice: 3396,
          quality: 'Uncommon',
          itemLevel: 40,
          requiredLevel: 0,
          slot: 'Head',
          tooltip: [
            {
              label: 'Lucky Fishing Hat',
            },
            {
              label: 'Phase 1',
              format: 'alignRight',
            },
            {
              label: 'Item Level 40',
              format: 'Misc',
            },
            {
              label: 'Binds when picked up',
            },
            {
              label: 'Head',
            },
            {
              label: 'Cloth',
              format: 'alignRight',
            },
            {
              label: '43 Armor',
            },
            {
              label: '+15 Stamina',
            },
            {
              label: 'Durability 45 / 45',
            },
            {
              label: 'Requires Fishing (1)',
            },
            {
              label: 'Equip: Fishing skill increased by 5.',
              format: 'Uncommon',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink:
            '|cff1eff00|Hitem:19972::::::::::0|h[Lucky Fishing Hat]|h|r',
          contentPhase: 1,
          source: {
            category: 'Quest',
            quests: [
              {
                questId: 8221,
                name: "Rare Fish - Keefer's Angelfish",
                faction: 'Both',
              },
            ],
          },
          uniqueName: 'lucky-fishing-hat',
          type: 'allianceItem',
          notes: 'test alliance note alt 1',
          priority: 1,
        },
      ],
    },
    mainHand: {
      items: [
        {
          type: 'hordeItem',
          itemId: 49623,
          name: 'Shadowmourne',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_axe_113.jpg',
          class: 'Weapon',
          subclass: 'Axe',
          sellPrice: 504762,
          quality: 'Legendary',
          itemLevel: 284,
          requiredLevel: 80,
          slot: 'Two-Hand',
          tooltip: [
            {
              label: 'Shadowmourne',
            },
            {
              label: 'Phase 4',
              format: 'alignRight',
            },
            {
              label: 'Item Level 284',
              format: 'Misc',
            },
            {
              label: 'Binds when picked up',
            },
            {
              label: 'Unique',
            },
            {
              label: 'Two-Hand',
            },
            {
              label: 'Axe',
              format: 'alignRight',
            },
            {
              label: '954 - 1,592 Damage',
            },
            {
              label: 'Speed 3.70',
              format: 'alignRight',
            },
            {
              label: '(344.05 damage per second)',
            },
            {
              label: '+223 Strength',
            },
            {
              label: '+198 Stamina',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Socket Bonus: +8 Strength',
              format: 'Poor',
            },
            {
              label: '\n\nDurability 145 / 145',
            },
            {
              label: 'Classes: Warrior, Paladin, Death Knight',
            },
            {
              label: 'Requires Level 80',
            },
            {
              label: 'Equip: Improves critical strike rating by 114.',
              format: 'Uncommon',
            },
            {
              label: 'Equip: Increases your armor penetration by 114.',
              format: 'Uncommon',
            },
            {
              label:
                'Equip: Your melee attacks have a chance to drain a Soul Fragment granting you 30 Strength.  When you have acquired 10 Soul Fragments you will unleash Chaos Bane, dealing 1900 to 2100 Shadow damage split between all enemies within 15 yards and granting you 270 Strength for 10 sec.',
              format: 'Uncommon',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink: '|cffff8000|Hitem:49623::::::::::0|h[Shadowmourne]|h|r',
          contentPhase: 4,
          source: {
            category: 'Quest',
            quests: [
              {
                questId: 24549,
                name: 'Shadowmourne...',
                faction: 'Both',
              },
            ],
          },
          uniqueName: 'shadowmourne',
          notes: null,
        },
        {
          type: 'allianceItem',
          itemId: 49623,
          name: 'Shadowmourne',
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_axe_113.jpg',
          class: 'Weapon',
          subclass: 'Axe',
          sellPrice: 504762,
          quality: 'Legendary',
          itemLevel: 284,
          requiredLevel: 80,
          slot: 'Two-Hand',
          tooltip: [
            {
              label: 'Shadowmourne',
            },
            {
              label: 'Phase 4',
              format: 'alignRight',
            },
            {
              label: 'Item Level 284',
              format: 'Misc',
            },
            {
              label: 'Binds when picked up',
            },
            {
              label: 'Unique',
            },
            {
              label: 'Two-Hand',
            },
            {
              label: 'Axe',
              format: 'alignRight',
            },
            {
              label: '954 - 1,592 Damage',
            },
            {
              label: 'Speed 3.70',
              format: 'alignRight',
            },
            {
              label: '(344.05 damage per second)',
            },
            {
              label: '+223 Strength',
            },
            {
              label: '+198 Stamina',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Socket Bonus: +8 Strength',
              format: 'Poor',
            },
            {
              label: '\n\nDurability 145 / 145',
            },
            {
              label: 'Classes: Warrior, Paladin, Death Knight',
            },
            {
              label: 'Requires Level 80',
            },
            {
              label: 'Equip: Improves critical strike rating by 114.',
              format: 'Uncommon',
            },
            {
              label: 'Equip: Increases your armor penetration by 114.',
              format: 'Uncommon',
            },
            {
              label:
                'Equip: Your melee attacks have a chance to drain a Soul Fragment granting you 30 Strength.  When you have acquired 10 Soul Fragments you will unleash Chaos Bane, dealing 1900 to 2100 Shadow damage split between all enemies within 15 yards and granting you 270 Strength for 10 sec.',
              format: 'Uncommon',
            },
            {
              label: 'Sell Price:',
            },
          ],
          itemLink: '|cffff8000|Hitem:49623::::::::::0|h[Shadowmourne]|h|r',
          contentPhase: 4,
          source: {
            category: 'Quest',
            quests: [
              {
                questId: 24549,
                name: 'Shadowmourne...',
                faction: 'Both',
              },
            ],
          },
          uniqueName: 'shadowmourne',
          notes: null,
        },
      ],
      alternatives: [
        {
          itemId: 49888,
          name: "Shadow's Edge",
          icon: 'https://render-classic-us.worldofwarcraft.com/icons/56/inv_axe_113.jpg',
          class: 'Weapon',
          subclass: 'Axe',
          sellPrice: 0,
          quality: 'Epic',
          itemLevel: 264,
          requiredLevel: 80,
          slot: 'Two-Hand',
          tooltip: [
            {
              label: "Shadow's Edge",
            },
            {
              label: 'Phase 4',
              format: 'alignRight',
            },
            {
              label: 'Item Level 264',
              format: 'Misc',
            },
            {
              label: 'Binds when picked up',
            },
            {
              label: 'Unique',
            },
            {
              label: 'Two-Hand',
            },
            {
              label: 'Axe',
              format: 'alignRight',
            },
            {
              label: '872 - 1,309 Damage',
            },
            {
              label: 'Speed 3.70',
              format: 'alignRight',
            },
            {
              label: '(294.73 damage per second)',
            },
            {
              label: '+185 Strength',
            },
            {
              label: '+185 Stamina',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Red Socket',
              format: 'Poor',
            },
            {
              label: 'Socket Bonus: +6 Strength',
              format: 'Poor',
            },
            {
              label: '\n\nDurability 120 / 120',
            },
            {
              label: 'Classes: Warrior, Paladin, Death Knight',
            },
            {
              label: 'Requires Level 80',
            },
            {
              label: 'Equip: Improves critical strike rating by 92.',
              format: 'Uncommon',
            },
            {
              label: 'Equip: Increases your armor penetration by 92.',
              format: 'Uncommon',
            },
          ],
          itemLink:
            '|cffa335ee|Hitem:49888::::::::::0|h[Shadow&apos;s Edge]|h|r',
          contentPhase: 4,
          source: {
            category: 'Quest',
            quests: [
              {
                questId: 24743,
                name: "Shadow's Edge",
                faction: 'Both',
              },
            ],
          },
          uniqueName: 'shadows-edge',
          type: 'hordeItem',
          notes: null,
          priority: 1,
        },
      ],
    },
    buildId: 75,
  },
];
