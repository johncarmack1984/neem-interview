import * as React from "react";
import { LucideIcon, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, Icon, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center rounded-md border border-input p-0 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-10",
          className,
          props.disabled ? "bg-muted opacity-50" : "bg-background",
        )}
      >
        <input
          className="w-full py-2 pl-3 text-[16px] disabled:cursor-not-allowed md:text-sm"
          type={type}
          ref={ref}
          {...props}
        />
        {Icon ? <Icon className="mr-3 stroke-border" /> : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
