<template>
  <BottomPopUp
    title="Добавить комплектующее"
    @hide="emit('hide')"
    :isShow="isShow"
  >
    <div class="row">
      <div class="resized">
        <InputMain title="Название комплектующего" v-model="name" />
      </div>
      <div class="resized countPrice">
        <SelectMain
          v-model="count"
          placeholder="Количество"
          :options="options"
        />
        <InputMain title="Сумма" v-model="price" />
      </div>
    </div>
    <div class="row">
      <div class="resized">
        <p class="title">Фотография чека</p>
        <label for="addPhoto" class="addPhoto">
          <IconColor v-if="!image" ico="Button/add-photo.svg" />
          <img v-else :src="image" style="width: 42px; height: 42px" />
          <input
            name="check"
            id="addPhoto"
            type="file"
            accept=".png, .jpg, .jpeg, .jpe, .jif, .jfif, .jfi, .heif, .hevc, .HEIC, .HEVC, .jp2, .j2k, .jpf, .jpx, .jpm, .mj2"
            @input="SetCheck"
          />
        </label>
        <ButtonMain
          :disabled="canSave == false"
          text="Сохранить"
          :action="Save"
          style="margin-bottom: 0; width: 100%"
        />
      </div>
    </div>
  </BottomPopUp>
</template>

<script setup lang="ts">
import { Accessory } from "@/models/Application";
import BottomPopUp from "@/components/UI/BottomPopUp";
import InputMain from "@/components/UI/InputMain";
import SelectMain from "@/components/UI/SelectMain";
import ButtonMain from "@/components/UI/ButtonMain";
import IconColor from "@/components/UI/IconColor";
import { defineEmits, defineProps, computed, ref } from "vue";
import { useStore } from "vuex";
import { Option } from "@/models/UI/Props";
const store = useStore();

const image = ref<string>("");
const name = ref<string>("");
const price = ref<string>("");
const count = ref<number>(null);
const checkFile = ref(null);
const canSave = computed(() => {
  return (
    image.value != "" &&
    name.value != "" &&
    price.value != "" &&
    count.value != null
  );
});
let opt = [];
for (let i = 1; i < 100; i++) {
  opt.push({ code: i, label: i.toString() });
}
const options = ref<Option[]>(opt);
const accessories: Accessory[] = computed(
  () => store.state.accessory.accessories
);
const emit = defineEmits(["hide"]);
defineProps({
  isShow: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const SetCheck = (e: Event) => {
  if (!(e.target as HTMLInputElement).files[0]) return;
  checkFile.value = (e.target as HTMLInputElement).files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    image.value = e.target.result;
  };
  reader.readAsDataURL(checkFile.value);
};
const Save = () => {
  console.log("SAVE");
  const current = store.state.application.current;
  const id =
    current.accessories && current.accessories.length > 0
      ? current.accessories[current.accessories.length - 1].id + 1
      : 0;
  store.commit("addAccessory", {
    id: id,
    name: name.value,
    image: image.value,
    price: Number(price.value),
    status: image.value !== "",
  });
  store.commit("addApplicationAccessory", id);
  image.value = "";
  name.value = "";
  price.value = "";
  count.value = null;
  emit("hide");
};
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
@import "@/styles/Tabs";
.row {
  .resized {
    margin-left: 16px;
    margin-right: 16px;
    div {
      margin-bottom: 12px;
    }
    .addPhoto {
      @extend %tab;
      margin-bottom: 74px;

      width: 78px;
      height: 78px;
      display: inline-block;
      position: relative;
      padding: 18px;
      border-radius: 16px;

      input[type="file"] {
        display: none;
      }
      image {
        width: 42px;
        height: 42px;
      }
    }
  }
  .countPrice {
    display: flex;
    justify-content: space-between;

    div {
      width: calc(50% - 6px);
    }
    .tab {
      width: calc(50% - 6px);
    }
  }
}
.title {
  @extend %title2Medium;

  margin-top: 12px;
  margin-bottom: 20px;
  padding-left: 4px;
  text-align: left;
}
</style>
