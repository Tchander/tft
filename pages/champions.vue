<template>
  <main class="page">
    <content-section>
      <search-filter v-model="searchChampionByName" class="search-wrapper" />
      <ul class="champions-list">
        <champions-card v-for="champion in filteredList" :key="champion.id" :champion="champion" />
      </ul>
    </content-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ChampionsCard from '~/components/Main/Champions/ChampionsCard'
import SearchFilter from '@/components/Main/Filters/SearchFilter'

export default {
  name: 'Champions',
  components: { SearchFilter, ChampionsCard },
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

.champions-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 80px;
}
</style>
