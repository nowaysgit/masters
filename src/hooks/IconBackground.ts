import { onMounted, Ref } from "vue";

export default function useIconBackground(
  div: Ref<HTMLElement>,
  ico: string,
  size = "24px",
  marginBottom = "18px"
) {
  const hook = onMounted(() => {
    if (ico != "") {
      div.value.style.background = `url(../assets/icons/${ico})`;
      div.value.style.backgroundRepeat = `no-repeat`;
      div.value.style.minHeight = size;
      div.value.style.minWidth = size;
      div.value.style.marginBottom = marginBottom;
    }
  });
  return { hook };
}
