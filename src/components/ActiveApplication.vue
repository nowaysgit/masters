<template>
  <div class="container">
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Время"
          :line1="{ font: Font.headlineSemiBold, text: 'Сегодня,' }"
          :line2="{ font: Font.headlineSemiBold, text: 'в&nbsp;15:30' }"
          :color="Color.purpule"
          :size="Size.small"
        />
        <TaskTab
          name="Адрес"
          :line1="{
            font: Font.headlineSemiBold,
            text: 'ул. Байкальская, 250А',
          }"
          :line2="{ font: Font.headlineSemiBold, text: '4 км • 9 мин' }"
          :color="Color.grey40"
          :size="Size.large"
          image="map.png"
        />
      </div>
    </section>
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Клиент"
          :line1="{ font: Font.headlineSemiBold, text: 'Александр' }"
          :line2="{ font: Font.headLineRegular, text: '+7 (983) 243-10-67' }"
          :color="Color.green"
          :size="Size.large"
        />
        <TaskTab
          ico="phone.svg"
          :line2="{ font: Font.btnAction, text: 'Позвонить клиенту' }"
          :color="Color.grey40"
          :size="Size.small"
        />
      </div>
    </section>
  </div>
  <div class="container">
    <section class="row">
      <div class="resized column">
        <DropdownMenu name="Описание">
          <InfoTab
            name="Не работает видеокарта"
            line1="Майнилась, в один момент перестала определяться виндой. Не разбиралаcь."
          />
          <InfoTab
            name="Не работает видеокарта"
            line1="Майнилась, в один момент перестала определяться виндой. Не разбиралаcь."
          />
          <InfoTab
            name="Не работает видеокарта"
            line1="Майнилась, в один момент перестала определяться виндой. Не разбиралаcь."
          />
        </DropdownMenu>
        <DropdownMenu name="Услуги"></DropdownMenu>
        <DropdownMenu name="Комплектующие"></DropdownMenu>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TaskTab from "@/components/UI/TaskTab.vue";
import InfoTab from "@/components/UI/InfoTab.vue";
import DropdownMenu from "@/components/UI/DropdownMenu.vue";
import { Color, Size, Font } from "@/models/UI/Enums";
</script>

<style lang="scss" scoped>
.container {
  @media (max-width: 369px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 370px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  .resized {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 369px) {
      width: calc(100vw - 32px);
      justify-content: space-between;
    }

    @media (min-width: 370px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .column {
    flex-direction: column;
  }

  .row {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }
}
</style>
