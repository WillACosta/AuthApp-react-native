import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  gradientInitial: "#7BDE9E",
  gradientEnd: "#17B7BD",

  primary: "#7BDE9E",
  secondary: "#0C381F",

  green: "#66D59A",
  lightGreen: "#E6FEF0",

  lime: "#00BA63",
  emerald: "#2BC978",

  background: "#FFFFFF",
  black: "#1E1F20",
  white: "#FFFFFF",
  lightWhite: "rgba(255, 255, 255, 0.7)",

  danger: "#F01",

  gray: "#9b9d9e",
  text: "#6c757d",

  transparent: "transparent",

  linearGradient: "rgb(123,222,158)",
  linear: "linear-gradient(90deg, rgba(123,222,158,1) 12%, rgba(23,183,189,1) 100%)"
};

export const Typography = {
  fontFamilyRegular: "Roboto-Regular",
  fontFamilyBold: "Roboto-Bold",
  fontFamilyBlack: "Roboto-Black",

  h1: "30px",
  h2: "25px",
  h3: "22px",
  h4: "18px",
  h5: "16px",

  lh1: "36",
  lh2: "30",
  lh3: "22",
  lh4: "12"
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS, Typography };

export default appTheme;
