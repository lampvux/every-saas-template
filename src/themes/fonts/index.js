import { Inter, Montserrat } from "next/font/google";

const interFont = Inter({ subsets: ["cyrillic", "latin"] });
const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });
export const fonts = {
  montserrat: montserrat.style.fontFamily,
  inter: interFont.style.fontFamily,
  body: `"${interFont.style.fontFamily}", sans-serif`,
  heading: `"${interFont.style.fontFamily}", serif`,
};
