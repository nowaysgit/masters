<template>
  <div class="container">
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Время"
          :line1="{ font: Font.bodySemiBold, text: 'Сегодня,' }"
          :line2="{ font: Font.bodySemiBold, text: 'в&nbsp;15:30' }"
          :color="Color.tabs"
          :size="Size.small"
        />
        <TaskTab
          name="Адрес"
          :line1="{
            font: Font.bodySemiBold,
            text: 'ул. Байкальская, 250А',
          }"
          :line2="{ font: Font.bodySemiBold, text: '4 км • 9 мин' }"
          :color="Color.tabs"
          :size="Size.large"
          image="map.png"
        />
      </div>
    </section>
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Клиент"
          :line1="{ font: Font.bodySemiBold, text: 'Александр' }"
          :line2="{ font: Font.bodyRegular, text: '+7 (983) 243-10-67' }"
          :color="Color.tabs"
          :size="Size.large"
        />
        <TaskTab
          ico="phone.svg"
          :line2="{ font: Font.bodyMedium, text: 'Позвонить клиенту' }"
          :color="Color.tabs"
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
            text="Не работает видеокарта. Майнилась, в&nbsp;один момент перестала определяться виндой. Не разбиралаcь."
          />
          <InfoTab
            text="Не работает видеокарта. Майнилась, в&nbsp;один момент перестала определяться виндой. Не разбиралаcь."
          />
          <InfoTab
            text="Не работает видеокарта. Майнилась, в&nbsp;один момент перестала определяться виндой. Не разбиралаcь."
          />
        </DropdownMenu>
        <DropdownMenu name="Услуги"></DropdownMenu>
        <DropdownMenu name="Комплектующие"></DropdownMenu>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TaskTab from "@/components/Tabs/TaskTab.vue";
import InfoTab from "@/components/Tabs/InfoTab.vue";
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
