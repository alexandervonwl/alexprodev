import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { badgeVariants } from "../variants/badge-variants";

export const Badge = ({
  className,
  variant,
  asChild = false,
  ref,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...props}
    />
  );
};
