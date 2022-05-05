<template>
  <div class="page">
    <main>
      <content-section>
        <search-filter v-model="searchChampionByName" class="search-wrapper" />
        <ul class="champions-list">
          <champions-card v-for="champion in filteredList" :key="champion.id" :champion="champion" />
        </ul>
      </content-section>
    </main>
    <aside class="left-filter-wrapper">
      <champions-filter
        v-model="championsByClass"
        v-bind="$options.CHAMPIONS_FILTER_BY_CLASS"
        @changeCheckbox="changeCheckbox"
      />
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CHAMPIONS_FILTER_BY_CLASS } from '@/const'
import ChampionsCard from '~/components/Main/Champions/ChampionsCard'
import SearchFilter from '@/components/Main/Filters/SearchFilter'
import ChampionsFilter from '@/components/Main/Filters/ChampionsFilter'

export default {
  CHAMPIONS_FILTER_BY_CLASS,
  name: 'Champions',
  components: { ChampionsFilter, SearchFilter, ChampionsCard },

  data () {
    return {
      searchChampionByName: '',
      championsByClass: []
    }
  },

  computed: {
    ...mapState({
      champions: state => state.champions
    }),

    filteredList () {
      const filteredList = this.champions.filter((champion) => {
        return champion.name.toLowerCase().includes(this.searchChampionByName.toLowerCase())
      })
      if (this.championsByClass.length) {
        if (filteredList.length !== 0) {
          return this.filterByClass(filteredList)
        }
        return this.champions
      }
      return filteredList.length !== 0 ? filteredList : this.champions
    }
  },

  methods: {
    changeCheckbox (checkboxList) {
      this.championsByClass = checkboxList
    },

    filterByClass (championsList) {
      return championsList.filter((champion) => {
        if (this.championsByClass.length > champion.classes.length) {
          return false
        }
        return this.championsByClass.every(el => champion.classes.includes(el))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
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
.left-filter-wrapper {
  position: absolute;
  top: 60px;
  left: 30px;
  width: 100%;
  max-width: 360px;
  border: 1px solid #4d648d;
  border-radius: 4px;
}
</style>
