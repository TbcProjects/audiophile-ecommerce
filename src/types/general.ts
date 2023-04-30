import type { SVGProps } from "react";
import type { IconProps, OmitCommonProps } from "@chakra-ui/react";

export type Params = {
  params: {
    slug: string;
  };
};

export type CustomIconProps = JSX.IntrinsicAttributes &
  OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
  IconProps & { as?: "svg" | undefined };
