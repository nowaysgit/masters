import { ColorClass, Font } from "@/models/UI/Enums";
import { PropType } from "vue";

export interface Line {
  font: Font;
  text: string;
}
export interface Option {
  code: string;
  label: string;
}
export const Props = {
  text: {
    type: String,
    required: false,
    default: "",
  },
  options: {
    type: Array as PropType<Array<Option>>,
    required: false,
    default() {
      return [
        {
          code: "",
          text: "",
        },
      ];
    },
  },
  boolean: {
    type: Boolean,
    required: false,
    default: false,
  },
  number: {
    type: Number,
    required: false,
    default: 0,
  },
  line: {
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
  colorClass: {
    type: String as PropType<ColorClass>,
    required: false,
    default: ColorClass.tabs,
  },
  colorRgba: {
    type: String,
    required: false,
    default: "rgba(255, 255, 255, 1)",
  },
  action: {
    type: Function as PropType<(id: number) => void>,
    required: false,
  },
};
