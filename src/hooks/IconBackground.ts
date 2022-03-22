import { onMounted, Ref } from "vue";

export default function useIconBackground(div: Ref<HTMLElement>, ico: string) {
  const hook = onMounted(() => {
    if (ico != "") {
      div.value.style.background = `url(../assets/icons/Tab/${ico})`;
      div.value.style.backgroundRepeat = `no-repeat`;
      div.value.style.minHeight = "24px";
      div.value.style.minWidth = "24px";
      div.value.style.marginBottom = "16px";
    }
  });
  return { hook };
}
