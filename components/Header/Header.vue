<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <nuxt-link to="/" class="navigation-list__link">
          <img src="@/static/images/logo.png" alt="logo" class="navigation-list__logo">
        </nuxt-link>
      </li>
      <li class="navigation-list__item">
        <nuxt-link to="/champions" class="navigation-list__link">
          Чемпионы
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #4d648d;
}
.navigation-list {
  display: flex;
  align-items: center;
  padding: 20px 60px;
  font-size: 24px;
  font-weight: 500;

  &__item {
    margin-right: 30px;
  }

  &__link {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #d0e1f9;
    }
  }

  &__logo {
    width: 40px;
    height: 40px;
  }
}
</style>
