export const cardDmgValue = {
  quick: [0.8, 0.96, 1.12],
  arts: [1, 1.2, 1.4],
  buster: [1.5, 1.8, 2.1],
  extra: [0, 0, 0, 1]
};

export const classAtkBonuses = {
  moonCancer: 1,
  saber: 1,
  archer: 0.95,
  lancer: 1.05,
  rider: 1,
  caster: 0.9,
  assassin: 0.9,
  berserker: 1.1,
  shielder: 1,
  ruler: 1.1,
  avenger: 1.1,
  beast: 1,
  "alter ego": 1,
  foreigner: 1
};

export const attributeTable = {
  man: {
    man: 1,
    sky: 1.1,
    earth: 0.9,
    star: 1,
    beast: 1
  },
  sky: {
    man: 0.9,
    sky: 1,
    earth: 1.1,
    star: 1,
    beast: 1
  },
  earth: {
    man: 1.1,
    sky: 0.9,
    earth: 1,
    star: 1,
    beast: 1
  },
  star: {
    man: 1,
    sky: 1,
    earth: 1,
    star: 1,
    beast: 1.1
  },
  beast: {
    man: 1,
    sky: 1,
    earth: 1,
    star: 1.1,
    beast: 1
  }
};

export const classTable = {
  shielder: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 1,
    ruler: 1,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  saber: {
    shielder: 1,
    saber: 1,
    archer: 0.5,
    lancer: 2,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  archer: {
    shielder: 1,
    saber: 2,
    archer: 1,
    lancer: 0.5,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  lancer: {
    shielder: 1,
    saber: 0.5,
    archer: 2,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  rider: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 2,
    assassin: 0.5,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 2,
    beastIi: 1,
    beastIii: 1
  },
  caster: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 0.5,
    caster: 1,
    assassin: 2,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 2,
    beastIi: 1,
    beastIii: 1
  },
  assassin: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 2,
    caster: 0.5,
    assassin: 1,
    berserker: 2,
    ruler: 0.5,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 2,
    beastIi: 1,
    beastIii: 1
  },
  berserker: {
    shielder: 1,
    saber: 1.5,
    archer: 1.5,
    lancer: 1.5,
    rider: 1.5,
    caster: 1.5,
    assassin: 1.5,
    berserker: 1.5,
    ruler: 1.5,
    avenger: 1.5,
    moonCancer: 1.5,
    "alter ego": 1.5,
    foreigner: 0.5,
    beastI: 1.5,
    beastIi: 1,
    beastIii: 1
  },
  ruler: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 1,
    avenger: 0.5,
    moonCancer: 2,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  avenger: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 2,
    avenger: 1,
    moonCancer: 0.5,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  "moon cancer": {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 0.5,
    avenger: 2,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1.2
  },
  "alter ego": {
    shielder: 1,
    saber: 0.5,
    archer: 0.5,
    lancer: 0.5,
    rider: 1.5,
    caster: 1.5,
    assassin: 1.5,
    berserker: 2,
    ruler: 1,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 2,
    beastI: 1,
    beastIi: 1,
    beastIii: 1.2
  },
  foreigner: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 1,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 0.5,
    foreigner: 2,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  beastI: {
    shielder: 1,
    saber: 2,
    archer: 2,
    lancer: 2,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 2,
    ruler: 1,
    avenger: 0.5,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  beastIi: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 1,
    ruler: 1,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  },
  beastIii: {
    shielder: 1,
    saber: 1,
    archer: 1,
    lancer: 1,
    rider: 1,
    caster: 1,
    assassin: 1,
    berserker: 1,
    ruler: 1,
    avenger: 1,
    moonCancer: 1,
    "alter ego": 1,
    foreigner: 1,
    beastI: 1,
    beastIi: 1,
    beastIii: 1
  }
};

export const cardNpValues = {
  quick: [1, 1.5, 2],
  arts: [3, 4.5, 6],
  buster: [0, 0, 0],
  extra: [0, 0, 0, 1]
};

export function calculateDamage({ servant, enemy, cards, input }) {
  const cardMods = {
    quick: Number(input.quickMod) + Number(servant.passives.quickMod),
    arts: Number(input.artsMod) + Number(servant.passives.artsMod),
    buster: Number(input.busterMod) + Number(servant.passives.busterMod),
    extra: 0
  };

  const cardTypes = cards.map(card => (card.isNp ? servant.npCard : card.type));
  const firstCardBonusType = cardTypes[0];

  const isBusterChain = Number(cardTypes.every(type => type === "buster"));

  const allCardsAreSameType = new Set(cardTypes).size === 1;

  const extraCard = {
    type: "extra",
    isCrit: false,
    isNp: false
  };

  return cards.concat(extraCard).map((card, i) => {
    const isNp = Number(card.isNp);
    const isCrit = Number(card.isCrit);
    const isSuperEffective = Number(input.isSuperEffective);
    const cardType = card.isNp ? servant.npCard : card.type;

    // 0 based indexing
    const npLevel = input.npLevel - 1;

    // Check if user inputted a NP Value
    const whichNpMultiplier = input.npValue
      ? input.npValue
      : // Otherwise use NP (upgraded if asked to)
      servant.hasUpgradeNp && input.useUpgradedNp
      ? servant.npUpgradeValues[npLevel]
      : servant.npValues[npLevel];
    const npDamageMultiplier = card.isNp ? Number(whichNpMultiplier) / 100 : 1;

    // NP doesn't have FCB
    const firstCardBonus =
      !card.isNp && firstCardBonusType === "buster" ? 0.5 : 0;

    // NP is multiplied bt the first cardDmgValue always
    const cardDamageValue = card.isNp
      ? cardDmgValue[cardType][0]
      : cardDmgValue[cardType][i];
    const classAtkBonus = classAtkBonuses[servant.className];

    const triangleMod = classTable[servant.className][enemy.className];
    const attributeMod = attributeTable[servant.attribute][enemy.attribute];

    // Extra cards get more damage if all cards have same type
    const isExtra = cardType === "extra";
    const extraCardMod = isExtra ? (allCardsAreSameType ? 3.5 : 2) : 1;

    const servantAtk = Number(input.attack);
    const flatAttackMod =
      Number(input.flatAttackMod) + Number(servant.passives.flatAttackMod);
    const cardMod = cardMods[cardType] / 100;
    const atkMod = Number(input.atkMod) / 100;
    const powerMod = Number(input.powerMod) / 100;
    const critMod =
      (Number(input.critMod) + Number(servant.passives.critMod)) / 100;
    const npMod = Number(input.npMod) / 100;

    const npSuperMod = Number(card.isNp ? input.npSuperMod / 100 : 1);

    const busterChainMod = !card.isNp && !isExtra && isBusterChain ? 0.2 : 0;

    const damage = randomMod =>
      Math.round(
        servantAtk *
          npDamageMultiplier *
          (firstCardBonus + cardDamageValue * (1 + cardMod)) *
          classAtkBonus *
          triangleMod *
          attributeMod *
          randomMod *
          0.23 *
          (1 + atkMod) *
          (1 + isCrit) *
          extraCardMod *
          (1 + powerMod + critMod * isCrit + npMod * isNp) *
          (1 + (npSuperMod - 1) * isSuperEffective) +
          flatAttackMod +
          servantAtk * busterChainMod
      );

    const lower = damage(0.9);
    const higher = damage(1.1);
    const average = damage(1);

    return {
      card,
      damage: {
        lower,
        higher,
        average
      }
    };
  });
}
