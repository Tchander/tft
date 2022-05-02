<template>
  <li class="champion-card">
    <img
      class="champion-card__avatar"
      :class="`champion-card__avatar_${champion.rank}`"
      :src="require(`@/static/images/champions/${champion.avatar}.png`)"
      :alt="champion.name"
    >
    <div class="champion-card__name">
      {{ champion.name }}
    </div>
    <div class="champion-card__info">
      <div class="champion-card__classes">
        <div v-for="championClass in champion.classes" :key="championClass + champion.id" class="champion-card__class">
          <img :src="$options.CLASS_EMBLEMS[championClass]" :alt="championClass" class="champion-card__emblems">
          <p class="champion-card__text">
            {{ championClass }}
          </p>
        </div>
      </div>
      <div class="champion-card__rank">
        <span class="champion-card__number">{{ champion.rank }}</span>
        <span class="champion-card__background" />
      </div>
    </div>
  </li>
</template>

<script>
import { CLASS_EMBLEMS } from '~/const'

export default {
  CLASS_EMBLEMS,
  name: 'ChampionsCard',
  props: {
    champion: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #4d648d;
  border-radius: 20px;
  box-shadow: 0 0 10px #4d648d, 0 0 40px #4d648d;

  &__avatar {
    width: 50%;
    border-radius: 20px;
    margin-bottom: 15px;

    &_2 {
      border: 2px solid #1a7750;
    }

    &_4 {
      border: 2px solid #a51699;
    }
  }

  &__name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__info {
    align-self: flex-start;
    display: flex;
    width: 100%;
  }

  &__classes {
    display: flex;
    flex-direction: column;
    width: 75%;
  }

  &__class {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__text {
    margin-left: 10px;
  }

  &__emblems {
    width: 20px;
    height: 20px;
  }

  &__rank {
    display: flex;
    justify-content: center;
    width: 25%;
  }

  &__number {
    position: relative;
    z-index: 2;
    font-size: 36px;
  }

  &__background {
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -36px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 4px solid #283655;
      background: #4d648d;
    }
  }
}

</style>
