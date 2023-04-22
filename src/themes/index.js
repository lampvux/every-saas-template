// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { config } from "./configs";
export const theme = extendTheme({ colors, fonts, config });
