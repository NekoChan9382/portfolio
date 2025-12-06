import { Variants } from "motion/react";
import {
  getBorderColor,
  getHoverColor,
  getSelectedColor,
} from "../utils/Helper";

// ボーダーホバーエフェクト（ボタン・カード用）
export const hoverVariants: Variants = {
  initial: {
    borderColor: getBorderColor(),
  },
  hover: {
    borderColor: getHoverColor(),
    boxShadow: `0 0 20px ${getHoverColor()}40`,
  },
  selected: {
    borderColor: getSelectedColor(),
  },
};

// スキルカード用ホバーエフェクト（上に移動）
export const skillCardHoverVariants: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -10,
    color: getHoverColor(),
  },
};

// スライドアニメーション（モーダル画像切り替え用）
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// ページ矢印ボタン用
export const pageArrowVariants: Variants = {
  initial: {
    color: "black",
    borderColor: getBorderColor(),
  },
  hover: {
    color: getHoverColor(),
    borderColor: getHoverColor(),
    boxShadow: `0 0 20px ${getHoverColor()}40`,
  },
};
