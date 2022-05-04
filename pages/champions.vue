<template>
  <main class="page">
    <content-section>
      <div class="search-wrapper">
        <input v-model="searchChampionByName" type="text" class="search" placeholder="Поиск по чемпиону">
        <label class="search-label">Поиск по чемпиону:</label>
      </div>
      <ul class="champions-list">
        <champions-card v-for="champion in filteredList" :key="champion.id" :champion="champion" />
      </ul>
    </content-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ChampionsCard from '~/components/Main/Champions/ChampionsCard'

export default {
  name: 'Champions',
  components: { ChampionsCard },
  data () {
    return {
      searchChampionByName: ''
    }
  },
  computed: {
    ...mapState({
      champions: state => state.champions
    }),

    filteredList () {
      const result = this.champions.filter((champion) => {
        return champion.name.toLowerCase().includes(this.searchChampionByName.toLowerCase())
      })
      return result.length !== 0 ? result : this.champions
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 150px;
}
.search-wrapper {
  position: relative;
  margin: 0 auto 70px;
  max-width: 420px;
}
.search-label {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  letter-spacing: 0.7px;
  opacity: 0;
  z-index: -1;
  color: #fff;
  transition: .5s all ease-in-out;
}
.search {
  width: 100%;
  background: #283655;
  border: 1px solid #4d648d;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  transition: .5s all ease-in-out;

  &::placeholder {
    color: #4d648d;
    transition: .5s opacity ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #4d648d;

    & + .search-label {
      z-index: 2;
      transform: translateY(-40px) translateX(-10px);
      opacity: 1;
    }

    &::placeholder {
      opacity: 0;
    }
  }

}
.champions-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  padding-bottom: 80px;
}
</style>
