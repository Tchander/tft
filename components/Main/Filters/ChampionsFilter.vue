<template>
  <div class="filter-wrapper">
    <div class="filter-title">
      {{ title }}
    </div>
    <div class="filter-list-wrapper">
      <div v-for="item in items" :key="item" class="filter-list">
        <input
          type="checkbox"
          :value="item"
          class="filter-list__input"
          @click="changeCheckbox(item)"
        >
        <label class="filter-list__label">{{ item }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChampionsFilter',
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      checkboxList: []
    }
  },

  methods: {
    changeCheckbox (item) {
      const index = this.checkboxList.indexOf(item)
      if (index !== -1) {
        this.checkboxList.splice(index, 1)
      } else {
        this.checkboxList.push(item)
      }
      this.$emit('changeCheckbox', this.checkboxList)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
  padding: 20px;
}
.filter-title {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.7px;
  text-align: center;
}
.filter-list-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 10px;
}
.filter-list {
  display: flex;
  align-items: center;

  &__input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__label {
    margin-left: 8px;
  }
}
</style>
