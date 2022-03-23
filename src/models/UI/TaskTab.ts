import { Color, Font, Size } from "@/models/UI/Enums";
import { PropType } from "vue";

export interface Line {
  font: Font;
  text: string;
}

export const Props = {
  name: {
    type: String,
    required: false,
    default: "",
  },
  line1: {
    type: Object as PropType<Line>,
    required: false,
    default() {
      return {
        font: Font.bodySemiBold,
        text: "",
      };
    },
  },
  line2: {
    type: Object as PropType<Line>,
    required: false,
    default() {
      return {
        font: Font.bodySemiBold,
        text: "",
      };
    },
  },
  ico: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.tabs,
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: Size.small,
  },
  action: {
    type: Function as PropType<(id: number) => void>,
    required: false,
  },
};
