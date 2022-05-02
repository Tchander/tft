import { CLASSES } from '~/const'

export const state = () => ({
  champions: [
    {
      id: 1,
      name: 'Алистар',
      ability: {
        name: 'Сокрушение',
        description: 'Алистар совершает рывок к цели, отбрасывая ее на небольшое расстояние. Затем он бьет по земле,' +
          ' нанося всем врагам поблизости X магического урона и оглушая их на X сек.'
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
        description: 'Ари выпускает перед собой сферу, которая пролетает X яч., а затем возвращается обратно. ' +
          'Все пораженные враги получают X магического урона за касание. Если в противника попала сфера, ' +
          'последующие сферы наносят ему X% урона. Каждый раз, когда Ари применяет умение, количество выпускаемых ' +
          'сфер увеличивается на X до конца боя.'
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
      id: 2,
      name: 'Блицкранк',
      ability: {
        name: 'Ракетный захват',
        description: 'Блицкранк притягивает самого дальнего врага, нанося X магического урона и оглушая цель на X ' +
          'сек. Его следующая атака подбрасывает цель на 1 сек. Союзники, которые находятся на расстоянии атаки, ' +
          'начинают атаковать цель Блицкранка.'
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
    }
  ]
})
