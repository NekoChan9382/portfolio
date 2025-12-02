import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "../utils/Helper";

export const useIsMobile = (): boolean => {
  return useMediaQuery({ query: `(max-width: ${mobileWidth}px)` });
};
