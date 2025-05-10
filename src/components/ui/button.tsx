import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Creator brand color variants
        tropical: "bg-tropical-indigo-500 text-white hover:bg-tropical-indigo-600",
        asparagus: "bg-asparagus-500 text-white hover:bg-asparagus-600",
        coral: "bg-light-coral-500 text-white hover:bg-light-coral-600",
        vanilla: "bg-vanilla-500 text-charcoal-800 hover:bg-vanilla-600",
        charcoal: "bg-charcoal-700 text-white hover:bg-charcoal-800",
        
        // Outline variants
        "outline-tropical": "border border-tropical-indigo-500 text-tropical-indigo-700 bg-transparent hover:bg-tropical-indigo-50",
        "outline-asparagus": "border border-asparagus-500 text-asparagus-700 bg-transparent hover:bg-asparagus-50",
        "outline-coral": "border border-light-coral-500 text-light-coral-700 bg-transparent hover:bg-light-coral-50",
        "outline-vanilla": "border border-vanilla-400 text-charcoal-700 bg-transparent hover:bg-vanilla-100",
        "outline-charcoal": "border border-charcoal-400 text-charcoal-700 bg-transparent hover:bg-charcoal-100",
        
        // Gradient variants
        brand: "bg-gradient-to-r from-tropical-indigo-600 to-tropical-indigo-500 text-white hover:opacity-90 transition-opacity",
        accent: "bg-gradient-to-r from-asparagus-500 to-asparagus-400 text-white hover:opacity-90 transition-opacity",
        innovation: "bg-gradient-to-r from-light-coral-500 to-vanilla-400 text-charcoal-800 hover:opacity-90 transition-opacity",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
