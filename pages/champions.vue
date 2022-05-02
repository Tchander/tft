<template>
  <main class="page">
    <content-section>
      <ul class="champions-list">
        <champions-card v-for="champion in champions" :key="champion.id" :champion="champion" />
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
  computed: {
    ...mapState({
      champions: state => state.champions
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 150px;
}
.champions-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}
</style>
