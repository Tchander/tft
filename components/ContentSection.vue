<template>
  <section class="section">
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentSection'
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 80px;

  &__content {
    position: relative;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>
