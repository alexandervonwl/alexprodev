import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "../variants/button-variants";
import { type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...props}
    />
  );
};
