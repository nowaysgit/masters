<template>
  <div class="applicationPanel">
    <div class="line"></div>
    <div class="container">
      <h1 class="title">Активная заявка</h1>
      <section class="row">
        <div class="tab time">
          <p class="name">Время</p>
          <p class="headLine2">Сегодня,</p>
          <p class="headLine1">в&nbsp;15:30</p>
        </div>
        <div class="tab adress">
          <p class="name">Адрес</p>
          <p class="headLine2">ул. Байкальская, 250А</p>
          <p class="headLine1">4 км • 9 мин</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ApplicationPanel",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.applicationPanel {
  z-index: 1;
  position: fixed;
  top: calc(100vh - 150px);
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: $grey70;

  .line {
    margin-top: 10px;
    width: 32px;
    height: 5px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;

    opacity: 0.08;

    border-radius: 2.5px;
    -webkit-border-radius: 20.5px;
    -moz-border-radius: 2.5px;
  }

  .container {
    padding: 5px 16px;

    .title {
      @extend %largeTitle;
      text-align: left;
      padding: 0 4px;
    }

    .row {
      display: flex;
      margin-top: 20px;
      justify-content: space-between;

      .tab {
        max-height: 106px;
        padding: 10px 12px;
        border-radius: 16px;

        .name {
          @extend %nameTab;

          text-align: left;
          margin-bottom: 26px;
        }
        .headLine1 {
          @extend %headLine1;

          text-align: left;
        }
        .headLine2 {
          @extend %headLine2;
          min-width: 82px;

          text-align: left;
        }
      }
      .time {
        background-color: $purpule;
      }
      .adress {
        background: url(@/assets/images/map.png), #323232;
        background-blend-mode: screen, normal;
        border-radius: 16px;

        .headLine2 {
          min-width: 201px !important;
        }
      }
    }
  }
}
</style>
