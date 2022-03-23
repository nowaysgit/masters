import { Ref, ref, watch } from "vue";

export default function useLeaving(
  panel: Ref<HTMLElement>,
  background: Ref<HTMLElement>
) {
  const position = ref(1);
  let direction = true;

  let touchstartY = 0;
  let touchendY = 0;

  function handleGesture() {
    const distance =
      touchendY < touchstartY
        ? touchstartY - touchendY
        : touchendY - touchstartY;
    if (distance < 5) {
      tapp();
      return;
    }
    if (touchendY < touchstartY) {
      direction = true;
      if (position.value < 3) {
        position.value++;
      }
    }
    if (touchendY > touchstartY) {
      direction = false;
      if (position.value > 1) {
        position.value--;
      }
    }
  }

  const tapp = () => {
    if (direction) {
      if (position.value < 3) {
        position.value++;
      } else {
        direction = false;
        position.value--;
      }
    } else {
      if (position.value > 1) {
        position.value--;
      } else {
        direction = true;
        position.value++;
      }
    }
  };

  const panelStartTouch = (e) => {
    touchstartY = e.changedTouches[0].screenY;
  };

  const panelEndTouch = (e) => {
    touchendY = e.changedTouches[0].screenY;
    handleGesture();
  };

  const getHtml = (obg: any): HTMLElement => {
    return (obg.value as any).$el ? (obg.value as any).$el : obg.value;
  };

  watch(position, (currentValue) => {
    if (currentValue === 1) {
      getHtml(panel).style.top = "calc(100vh - 150px)";
      getHtml(background).style.visibility = "hidden";
      getHtml(background).style.opacity = "0";
    } else if (currentValue === 2) {
      getHtml(panel).style.top = "calc(100vh - 316px)";
      getHtml(background).style.visibility = "hidden";
      getHtml(background).style.opacity = "0";
    } else {
      getHtml(panel).style.top = "52px";
      getHtml(background).style.visibility = "visible";
      getHtml(background).style.opacity = "1";
    }
  });

  return { panelStartTouch, panelEndTouch };
}
