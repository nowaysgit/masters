import { onMounted, Ref } from "vue";

export default function useImageIcon(
  div: Ref<HTMLElement>,
  ico: string,
  size: string,
  marginBottom: string,
  color: string
) {
  const hook = onMounted(() => {
    if (ico != "") {
      div.value.style.background = `url(../assets/icons/${ico}) ${
        color ? `, ${color}` : ""
      }`;
      div.value.style.backgroundRepeat = `no-repeat`;
      if (size && size != "") div.value.style.minHeight = size;
      if (size && size != "") div.value.style.minWidth = size;
      if (marginBottom && marginBottom != "") {
        div.value.style.marginBottom = marginBottom;
      }
    }
  });
  return { hook };
}
