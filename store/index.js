import { CLASSES } from '~/const'

export const state = () => ({
  champions: [
    {
      id: 1,
      name: 'Алистар',
      ability: {
        name: 'Сокрушение',
        description: [
          'Алистар совершает рывок к цели, отбрасывая ее на небольшое расстояние. Затем он бьет по земле, нанося ' +
          'всем врагам поблизости X магического урона и оглушая их на X сек.'
        ]
      },
      rank: 4,
      classes: [CLASSES.hextech, CLASSES.colossus],
      stats: {
        health: 1400,
        armor: 80,
        mana: '85/170',
        damage: 90,
        speed: 0.6,
        magicResist: 80,
        dps: 150,
        critChance: 0.25,
        range: 1
      },
      avatar: 'alistar'
    },
    {
      id: 2,
      name: 'Ари',
      ability: {
        name: 'Сферы обмана',
        description: [
          'Ари выпускает перед собой сферу, которая пролетает X яч., а затем возвращается обратно. ' +
          'Все пораженные враги получают X магического урона за касание. Если в противника попала сфера, ' +
          'последующие сферы наносят ему X% урона. Каждый раз, когда Ари применяет умение, количество выпускаемых ' +
          'сфер увеличивается на X до конца боя.'
        ]
      },
      rank: 4,
      classes: [CLASSES.syndicate, CLASSES.arcanist],
      stats: {
        health: 800,
        armor: 30,
        mana: '30/50',
        damage: 45,
        speed: 0.75,
        magicResist: 30,
        dps: 60,
        critChance: 0.75,
        range: 4
      },
      avatar: 'ahri'
    },
    {
      id: 3,
      name: 'Блицкранк',
      ability: {
        name: 'Ракетный захват',
        description: [
          'Блицкранк притягивает самого дальнего врага, нанося X магического урона и оглушая цель на X ' +
          'сек. Его следующая атака подбрасывает цель на 1 сек. Союзники, которые находятся на расстоянии атаки, ' +
          'начинают атаковать цель Блицкранка.'
        ]
      },
      rank: 2,
      classes: [CLASSES.scrap, CLASSES.bodyguard],
      stats: {
        health: 650,
        armor: 45,
        mana: '175/175',
        damage: 65,
        speed: 0.5,
        magicResist: 45,
        dps: 130,
        critChance: 0.25,
        range: 1
      },
      avatar: 'blitzcrank'
    },
    {
      id: 4,
      name: 'Браум',
      ability: {
        name: 'Вскрыватель хранилищ',
        description: [
          'Браум бьет по земле дверью от хранилища, создавая разлом в направлении цели. Враги в радиусе ' +
          '2 ячеек от Браума и те, кого поразил разлом, оглушаются на X сек. и получают X магического урона.'
        ]
      },
      rank: 4,
      classes: [CLASSES.syndicate, CLASSES.bodyguard],
      stats: {
        health: 1100,
        armor: 60,
        mana: '120/200',
        damage: 70,
        speed: 0.6,
        magicResist: 60,
        dps: 117,
        critChance: 0.25,
        range: 1
      },
      avatar: 'braum'
    },
    {
      id: 5,
      name: 'Брэнд',
      ability: {
        name: 'Выгорание',
        description: [
          'Брэнд выпускает огненный шар в ближайшего врага, поджигая его на X сек. и нанося X магического урона. ' +
          'Если враг уже горит, он дополнительно получает X магического урона и оглушается на X сек. (Общий урон: XX.)',

          'VIP-статус: Брэнд выпускает 2-й огненный шар в другую цель поблизости (приоритет отдается подожженным ' +
          'врагам), нанося на X% меньше урона.'
        ]
      },
      rank: 1,
      classes: [CLASSES.debonair, CLASSES.arcanist],
      stats: {
        health: 500,
        armor: 20,
        mana: '0/20',
        damage: 40,
        speed: 0.65,
        magicResist: 20,
        dps: 62,
        critChance: 0.25,
        range: 3
      },
      avatar: 'brand'
    },
    {
      id: 6,
      name: 'Вай',
      ability: {
        name: 'Пилтоверский сокрушитель',
        description: [
          'Вай накладывает на себя щит прочностью X и наносит X магического урона своей цели и врагам за ней.',

          'Во время 2-го применения Вай также совершает рывок сквозь цель.',

          'При 3-м применении Вай подбрасывает цель и с силой швыряет ее на землю, нанося X урона всем врагам вокруг.'
        ]
      },
      rank: 4,
      classes: [CLASSES.enforcer, CLASSES.rival, CLASSES.bruiser],
      stats: {
        health: 900,
        armor: 50,
        mana: '0/40',
        damage: 70,
        speed: 0.7,
        magicResist: 50,
        dps: 10,
        critChance: 0.25,
        range: 1
      },
      avatar: 'vi'
    },
    {
      id: 7,
      name: 'Варвик',
      ability: {
        name: 'Вечная жажда',
        description: [
          'Пассивно: атаки Варвика дополнительно наносят магический урон в размере X от текущего запаса здоровья ' +
          'цели, а также восстанавливают ему X здоровья.'
        ]
      },
      rank: 2,
      classes: [CLASSES.chemtech, CLASSES.challenger],
      stats: {
        health: 750,
        armor: 40,
        mana: '0/0',
        damage: 45,
        speed: 0.75,
        magicResist: 40,
        dps: 60,
        critChance: 0.25,
        range: 1
      },
      avatar: 'warwick'
    },
    {
      id: 8,
      name: 'Вейгар',
      rank: 5,
      classes: [CLASSES['yordl-lord']],
      stats: {
        health: 800,
        armor: 25,
        mana: '0/75',
        damage: 45,
        speed: 0.8,
        magicResist: 25,
        dps: 56,
        critChance: 0.25,
        range: 4
      },
      avatar: 'veigar'
    }
  ]
})
