<template>
  <div class="container">
    <nav>
      <router-link to="/">
        <img src="../assets/icons/NavigationBar/map.svg" />
        <p>Карта</p>
      </router-link>
      <router-link to="/applications">
        <img src="../assets/icons/NavigationBar/applications.svg" />
        <p>Заявки</p>
      </router-link>
      <router-link to="/price">
        <img src="../assets/icons/NavigationBar/price.svg" />
        <p>Прайс</p>
      </router-link>
      <router-link to="/profile">
        <img src="../assets/icons/NavigationBar/profile.svg" />
        <p>Профиль</p>
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.container {
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: $tabBarBackground;
  box-shadow: 0px -0.5px 0px rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);

  @media (max-width: 327px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 328px) {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (min-width: 365px) {
    padding-left: 0;
    padding-right: 0;
  }
  nav {
    @media (max-width: 327px) {
      justify-content: center;
    }
    @media (min-width: 328px) {
      justify-content: space-between;
    }
    @media (min-width: 365px) {
      justify-content: space-evenly;
    }
    display: flex;

    a {
      padding-top: 6px;
      padding-left: 12px;
      padding-right: 12px;

      p {
        @extend %footNote;
        min-width: 52px;

        text-align: center;
        color: rgba(255, 255, 255, 0.32);
      }
      img {
        filter: brightness(32%);
      }
      &.router-link-active,
      &.router-link-exact-active {
        p {
          color: rgba(255, 255, 255, 1);
        }

        img {
          filter: brightness(100%);
        }
      }
    }
  }
}
</style>
