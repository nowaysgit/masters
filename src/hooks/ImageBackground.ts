import { onMounted, Ref } from "vue";

export default function useImageBackground(
  div: Ref<HTMLElement>,
  image: string
) {
  const hook = onMounted(() => {
    if (image != "") {
      div.value.style.background = `url(../assets/images/${image}), #323232`;
      div.value.style.background = "background-blend-mode: screen, normal";
    }
  });
  return { hook };
}
