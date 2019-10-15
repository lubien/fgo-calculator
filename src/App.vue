<template>
  <div class="app">
    <div class="app-results">
      <div class="app-row" style="width: unset; padding: 0 15px">
        <div class="app-col" style="position: relative">
          <div class="advantage">
            <img
              v-show="hasClassAdvantage"
              :src="require('@/assets/relations/advantage.png')"
            />
            <img
              v-show="!hasClassAdvantage && hasClassDisadvantage"
              :src="require('@/assets/relations/disavantage.png')"
            />
          </div>

          <select
            v-model="enemyClassName"
            class="generic-input"
            style="width: 100%"
          >
            <option value="saber">Saber Enemy</option>
            <option value="archer">Archer Enemy</option>
            <option value="lancer">Lancer Enemy</option>
            <option value="rider">Rider Enemy</option>
            <option value="caster">Caster Enemy</option>
            <option value="assassin">Assassin Enemy</option>
            <option value="berserker">Berserker Enemy</option>
            <option value="shielder">Shielder Enemy</option>
            <option value="ruler">Ruler Enemy</option>
            <option value="avenger">Avenger Enemy</option>
            <option value="alter ego"> Alter Ego Enemy</option>
            <option value="moonCancer">Moon Cancer Enemy</option>
            <option value="foreigner">Foreigner Enemy</option>
          </select>
        </div>

        <div class="app-col" style="position: relative">
          <div class="advantage">
            <img
              v-show="hasAttributeAdvantage"
              :src="require('@/assets/relations/advantage.png')"
            />
            <img
              v-show="hasAttributeDisadvantage"
              :src="require('@/assets/relations/disavantage.png')"
            />
          </div>

          <select
            v-model="enemyAttribute"
            class="generic-input"
            style="width: 100%"
          >
            <option value="man">Man Enemy</option>
            <option value="sky">Sky Enemy</option>
            <option value="earth">Earth Enemy</option>
            <option value="star">Star Enemy</option>
            <option value="beast">Beast Enemy</option>
          </select>
        </div>
      </div>

      <div v-for="(card, i) in cards" :key="i" class="app-row">
        <div class="app-col app-col-2 app-col-result">
          <div
            v-if="calculations[i].damage.average"
            style="font-weight: bolder"
          >
            <AnimatedNumber :number="calculations[i].damage.average" />
          </div>
          <div
            v-if="calculations[i].damage.lower && calculations[i].damage.higher"
            class="text-muted"
          >
            <AnimatedNumber :number="calculations[i].damage.lower" /> ~
            <AnimatedNumber :number="calculations[i].damage.higher" />
          </div>
        </div>

        <template>
          <div
            v-if="card.key !== 'np'"
            class="app-col"
            style="flex-direction: column; margin-top: -10px"
          >
            <span>Critical?</span>

            <label class="switch switch-critical">
              <input type="checkbox" v-model="card.isCritical" />
              <div></div>
            </label>
          </div>

          <div v-else class="app-col np-options-col">
            Noble Phantasm
          </div>
        </template>

        <div class="app-col" style="display flex; flex-direction: column">
          <div>
            <img
              :src="require('@/assets/facecards/buster.png')"
              alt="Buster card"
              class="facecard-icon"
              :class="{ 'facecard-icon-active': card.key === 'buster' }"
              @click="selectCardType(i, 'buster')"
            />
            <img
              :src="require('@/assets/facecards/arts.png')"
              alt="Arts card"
              class="facecard-icon"
              :class="{ 'facecard-icon-active': card.key === 'arts' }"
              @click="selectCardType(i, 'arts')"
            />
          </div>

          <div>
            <img
              :src="require('@/assets/facecards/quick.png')"
              alt="Quick card"
              class="facecard-icon"
              :class="{ 'facecard-icon-active': card.key === 'quick' }"
              @click="selectCardType(i, 'quick')"
            />
            <img
              :src="require('@/assets/facecards/np.png')"
              alt="NP card"
              class="facecard-icon"
              :class="{ 'facecard-icon-active': card.key === 'np' }"
              @click="selectCardType(i, 'np')"
            />
          </div>
        </div>
      </div>

      <div class="app-row">
        <div class="app-col app-col-2 app-col-result">
          <div
            v-if="calculations[3].damage.average"
            style="font-weight: bolder"
          >
            <AnimatedNumber :number="calculations[3].damage.average" />
          </div>
          <div
            v-if="calculations[3].damage.lower && calculations[3].damage.higher"
            class="text-muted"
          >
            <AnimatedNumber :number="calculations[3].damage.lower" /> ~
            <AnimatedNumber :number="calculations[3].damage.higher" />
          </div>
        </div>

        <div v-if="false" class="app-col">
          <img
            :src="require('@/assets/facecards/extra.png')"
            alt="extra card"
            class="facecard-icon"
          />
        </div>

        <div class="app-col app-col-2 app-col-total">
          <div class="app-col app-col-2 app-col-result">
            <div
              v-if="totalCalculation.damage.average"
              style="font-weight: bolder"
            >
              <AnimatedNumber :number="totalCalculation.damage.average" />
            </div>
            <div
              v-if="
                totalCalculation.damage.lower && totalCalculation.damage.higher
              "
              class="text-muted"
            >
              <AnimatedNumber :number="totalCalculation.damage.lower" /> ~
              <AnimatedNumber :number="totalCalculation.damage.higher" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <template>
      <div v-if="selectingServant" class="app-panel">
        <div class="app-row" style="max-height: 64px">
          <input
            v-model="query"
            type="text"
            class="search-input"
            placeholder="Search by name"
          />
        </div>

        <div class="app-row">
          <ul class="search-results">
            <li v-for="servant in searchResults" :key="servant.id">
              <button
                class="search-result-button"
                @click="selectServant(servant)"
              >
                Use
              </button>
              <div>{{ servant.name }}</div>
              <div class="text-muted">
                {{ servant.className | name }} | {{ servant.attribute | name }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="app-panel">
        <div class="app-row">
          <div
            class="app-col app-col-2 app-col-square app-col-servant-name"
            @click="selectingServant = true"
          >
            {{ servant.name }}

            <div class="text-muted">
              Change Here
            </div>
          </div>
          <div class="app-col app-col-square buff-col">
            Attack
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="attack"
              class="app-input"
              v-bind="$options.masks.rawNumber"
            />
          </div>
        </div>

        <div class="app-row">
          <div class="app-col app-col-square buff-col">
            NP Level
          </div>
          <div class="app-col app-col-square">
            <select v-model="npLevel" class="np-input">
              <option value="-">Custom</option>
              <option value="1">Lv1</option>
              <option value="2">Lv2</option>
              <option value="3">Lv3</option>
              <option value="4">Lv4</option>
              <option value="5">Lv5</option>
            </select>
          </div>

          <template v-if="npLevel !== '-'">
            <div class="app-col app-col-square buff-col">
              Interlude?
            </div>

            <div class="app-col app-col-square" style="text-align: center">
              <span v-if="!servant.hasUpgradeNp">No NP interludes</span>

              <template v-else>
                <label class="switch switch-interlude">
                  <input type="checkbox" v-model="interlude" />
                  <div></div>
                </label>
              </template>
            </div>
          </template>

          <template v-else>
            <div
              class="app-col app-col-square buff-col"
              style="text-align: center"
            >
              Custom NP Value
            </div>

            <div class="app-col app-col-square" style="text-align: center">
              <Money
                v-model="npValue"
                class="np-input"
                v-bind="$options.masks.percentWithoutPrecision"
              />
            </div>
          </template>
        </div>

        <div class="app-row">
          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/atkmod.png')"
              alt="Attack Modifier"
              class="buff-img"
            />
            <div class="buff-label">Attack Mod</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="atkMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>

          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/critmod.png')"
              alt="Critical Modifier"
              class="buff-img"
            />
            <div class="buff-label">Critical Strength</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="critMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>
        </div>

        <div class="app-row">
          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/bustermod.png')"
              alt="Buster Modifier"
              class="buff-img"
            />
            <div class="buff-label">Buster Mod</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="busterMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>

          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/npmod.png')"
              alt="NP Modifier"
              class="buff-img"
            />
            <div class="buff-label">NP Strength</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="npMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>
        </div>
        <div class="app-row">
          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/artsmod.png')"
              alt="Arts Modifier"
              class="buff-img"
            />
            <div class="buff-label">Arts Mod</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="artsMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>

          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/powermod.png')"
              alt="Power Modifier"
              class="buff-img"
            />
            <div class="buff-label">Power Mod</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="powerMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>
        </div>
        <div class="app-row">
          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/quickmod.png')"
              alt="Quick Modifier"
              class="buff-img"
            />
            <div class="buff-label">Quick Mod</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="quickMod"
              class="app-input"
              v-bind="$options.masks.percent"
            />
          </div>

          <div class="app-col app-col-square buff-col">
            <img
              :src="require('@/assets/buffs/flatatkmod.png')"
              alt="Flat Damage"
              class="buff-img"
            />
            <div class="buff-label">Flat Damage</div>
          </div>
          <div class="app-col app-col-square">
            <Money
              v-model="flatAtkMod"
              class="app-input"
              v-bind="$options.masks.flatValue"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Money } from "v-money";
import AnimatedNumber from "@/components/AnimatedNumber.vue";
import servants from "@/assets/servants.json";
import { calculateDamage, classTable, attributeTable } from "./damage";

const dantes = servants.find(servant => servant.id === 96);

const defaultCards = () => [
  {
    key: "buster",
    isCritical: false,
    interlude: false,
    npValue: 0,
    npLevel: 1
  },

  {
    key: "arts",
    isCritical: false,
    interlude: false,
    npValue: 0,
    npLevel: 1
  },

  {
    key: "quick",
    isCritical: false,
    interlude: false,
    npValue: 0,
    npLevel: 1
  }
];

const defaultBuffs = () => ({
  atkMod: 0,
  busterMod: 0,
  artsMod: 0,
  quickMod: 0,
  critMod: 0,
  npMod: 0,
  powerMod: 0,
  flatAtkMod: 0,
  npLevel: 1,
  interlude: false,
  npValue: 900
});

export default {
  name: "App",

  components: { Money, AnimatedNumber },

  masks: {
    percent: {
      decimal: ",",
      thousands: ".",
      prefix: "",
      suffix: "%",
      precision: 0,
      masked: false
    },

    percentWithoutPrecision: {
      decimal: ",",
      thousands: ".",
      prefix: "",
      suffix: "%",
      precision: 0,
      masked: false
    },

    flatValue: {
      decimal: "",
      thousands: "",
      prefix: "",
      suffix: "",
      precision: 0,
      masked: false
    },

    rawNumber: {
      decimal: ",",
      thousands: ".",
      prefix: "",
      suffix: "",
      precision: 0,
      masked: false
    }
  },

  faceCards: [
    { key: "buster", image: require("@/assets/facecards/buster.png") },
    { key: "arts", image: require("@/assets/facecards/arts.png") },
    { key: "quick", image: require("@/assets/facecards/quick.png") },
    { key: "np", image: require("@/assets/facecards/np.png") }
  ],

  data: () => ({
    cards: defaultCards(),

    servant: dantes,
    attack: dantes.attack,
    ...defaultBuffs(),

    enemyClassName: dantes.className,
    enemyAttribute: dantes.attribute,

    selectingServant: false,
    query: ""
  }),

  computed: {
    searchResults() {
      const query = this.query.toLowerCase();

      return servants.filter(servant =>
        servant.name.toLowerCase().includes(query)
      );
    },

    calculations() {
      const enemy = {
        className: this.enemyClassName,
        attribute: this.enemyAttribute
      };

      const cards = this.cards.map(card => {
        const isNp = card.key === "np";

        return {
          type: isNp ? null : card.key,
          isCrit: !isNp && card.isCritical,
          isNp
        };
      });

      const npValue = this.npLevel === "-" && this.npValue;
      const useUpgradedNp = this.servant.hasUpgradeNp && this.interlude;
      const npLevel = this.npLevel;

      const input = {
        quickMod: this.quickMod,
        artsMod: this.artsMod,
        busterMod: this.busterMod,
        atkMod: this.atkMod,
        flatAttackMod: this.flatAtkMod,
        critMod: this.critMod,
        powerMod: this.powerMod,
        npMod: this.npMod,
        npSuperMod: 100,
        starGenMod: 0,
        npGainMod: 0,

        attack: this.attack,
        isSuperEffective: false,
        npValue: npValue,
        useUpgradedNp: useUpgradedNp,
        npLevel: npLevel
      };

      const model = {
        servant: this.servant,
        enemy,
        cards,
        input
      };

      return calculateDamage(model);
    },

    totalCalculation() {
      return {
        damage: {
          lower: sum(this.calculations.map(({ damage }) => damage.lower)),
          higher: sum(this.calculations.map(({ damage }) => damage.higher)),
          average: sum(this.calculations.map(({ damage }) => damage.average))
        }
      };
    },

    hasClassAdvantage() {
      return classTable[this.servant.className][this.enemyClassName] > 1;
    },

    hasClassDisadvantage() {
      return classTable[this.enemyClassName][this.servant.className] > 1;
    },

    hasAttributeAdvantage() {
      return attributeTable[this.servant.attribute][this.enemyAttribute] > 1;
    },

    hasAttributeDisadvantage() {
      return attributeTable[this.enemyAttribute][this.servant.attribute] > 1;
    }
  },

  methods: {
    selectServant(servant) {
      this.servant = servant;
      this.attack = servant.attack;
      this.cards = defaultCards();
      this.enemyClassName = servant.className;
      this.enemyAttribute = servant.attribute;
      this.selectingServant = false;
      Object.assign(this, defaultBuffs());
      this.npValue = servant.npValues[0];
      this.query = "";
    },

    selectCardType(i, key) {
      if (key === "np") {
        for (let [j, card] of this.cards.entries()) {
          if (j !== i && card.key === "np") {
            card.key = "buster";
          }
        }
      }

      this.cards[i].key = key;
    }
  },

  filters: {
    name(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },

    number(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};

function sum(xs) {
  return xs.reduce((a, b) => a + b, 0);
}
</script>

<style>
html,
body {
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  height: 100%;
}

.app {
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.app-results {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  max-height: 360px;
}

.app-panel {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  background-color: #2f3640;
  overflow-y: auto;
  color: white;
}

.app-row {
  flex: 1 0 0;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.app-panel .app-row {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.app-col {
  width: 25%;
  flex: 1 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-col-2 {
  flex: 2 0 0;
}

.app-col.app-col-square {
  border: 1px solid rgba(0, 0, 0, 0);
}

.app-col.buff-col {
  background-color: #353b48;
  color: white;
  flex-direction: column;
}

.app-col.buff-col .buff-label {
  text-align: center;
  font-size: 0.8em;
  margin: 2px 0;
  color: rgb(255, 255, 255, 0.5);
}

.buff-img {
  width: 36px;
  height: 36px;
}

.app-input {
  width: 100%;
  height: 100%;
  border: unset;
  text-align: center;
  font-size: 1.2em;
  background-color: rgba(0, 0, 0, 0);
  color: white;
}

.facecard-icon {
  width: 32px;
  height: 32px;
  filter: grayscale(100%);
  cursor: pointer;
  /* border: 1px solid rgba(0, 0, 0, 0); */
}

.facecard-icon-active {
  filter: unset;
  cursor: unset;
  /* border: 1px solid #34495e; */
}

.app-col-result {
  text-align: center;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
}

.app-col-result div {
  margin: 0 0 5px;
  padding: 0;
}

.text-muted {
  font-size: 0.7em;
  color: #2c3e50;
}

.app-col-servant-name {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.search-input {
  width: 100%;
  font-size: 18px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  color: white;
}

.search-results {
  list-style: none;
  padding: 0 15px;
  margin: 0;
  width: 100%;
}

.search-results li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
}

.app-panel .text-muted {
  color: rgba(255, 255, 255, 0.5);
}

.search-result-button {
  float: right;
  min-height: 20px;
  min-width: 70px;
  font-size: 0.7em;
  color: white;
  background: url("./assets/button-bg.png") no-repeat center;
  background-size: 100% 100%;
  font-family: "Droid Serif", "Franklin Gothic", "Bell Gothic Std",
    "Arial Narrow", sans-serif;
  padding: 3px 10px;
  font-size: 14px;
  box-shadow: 1px 1px 3px black;
  text-shadow: 2px 2px 2px #014eb1, -2px -2px 2px #014eb1, 2px -2px 2px #014eb1,
    -2px 2px 2px #014eb1;
  border: 1px solid white;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
}

.np-options-col {
  display: flex;
  flex-direction: column;
}

.np-input {
  height: 32px;
  width: 72px;
  text-align: center;
  border: 1px solid #dedede;
  padding: 0;
  margin-right: 3px;
}

.generic-input {
  height: 32px;
  text-align: center;
  border: 1px solid #dedede;
  padding: 0;
  margin-right: 3px;
}

.advantage {
  position: absolute;
  right: 10px;
  top: 32px;
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 10px;
  }
}

@keyframes MoveDownUp {
  0%,
  100% {
    bottom: 10px;
  }
  50% {
    bottom: 0;
  }
}

.advantage img {
  position: absolute;
  right: 0;
  width: 16px;
  height: 16px;
  animation: MoveUpDown 1s linear infinite;
}

.app-panel .np-input {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  color: white;
  text-align-last: center;
}

.app-panel .np-input option {
  text-align: center;
  color: black;
}

.app-col-total {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  border-right: none;
}
</style>

<style scoped>
/** Switch (source: https://codepen.io/wilsonpage/pen/cxKEs)
 -------------------------------------*/

.switch input {
  position: absolute;
  opacity: 0;
}

/**
 * 1. Adjust this to size
 */

.switch {
  display: inline-block;
  font-size: 20px; /* 1 */
  height: 1em;
  width: 2em;
  background: #bdb9a6;
  border-radius: 1em;
}

.switch div {
  height: 1em;
  width: 1em;
  border-radius: 1em;
  /* background: linear-gradient(
      rgba(30, 30, 30, 0.45), 
      rgba(30, 30, 30, 0.45)
    ), url('./assets/buffs/critmod.png'); */
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  transition: all 300ms;
}

.switch input:checked + div {
  transform: translate3d(100%, 0, 0);
  /* background: url('./assets/buffs/critmod.png'); */
  background-size: contain;
}

.switch.switch-critical div {
  background: linear-gradient(rgba(30, 30, 30, 0.45), rgba(30, 30, 30, 0.45)),
    url("./assets/buffs/critmod.png");
  background-size: contain;
}

.switch.switch-critical input:checked + div {
  background: url("./assets/buffs/critmod.png");
  background-size: contain;
}

.switch.switch-interlude div {
  background: linear-gradient(rgba(30, 30, 30, 0.45), rgba(30, 30, 30, 0.45)),
    url("./assets/upgrade-np.png");
  background-size: contain;
}

.switch.switch-interlude input:checked + div {
  background: url("./assets/upgrade-np.png");
  background-size: contain;
}
</style>
