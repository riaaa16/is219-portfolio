"use client"
import * as React from "react"

import { cn } from "@/lib/utils"

// Context to provide card variant to children
const CardVariantContext = React.createContext<string>("default");

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "pastel-blue" | "pastel-yellow" | "pastel-pink" | "charcoal"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-card",
    "pastel-blue": "bg-pastel-blue-500 text-dark-blue",
    "pastel-yellow": "bg-pastel-yellow-500 text-charcoal-500",
    "pastel-pink": "bg-pastel-pink-500 text-charcoal-500",
    "charcoal": "bg-charcoal-500 text-white",
  };

  return (
    <CardVariantContext.Provider value={variant}>
      <div
        ref={ref}
        className={cn(
          "rounded-lg border transition-all duration-200",
          // No shadow by default
          "hover:shadow-lg hover:-translate-y-1",
          variantClasses[variant],
          className
        )}
        data-variant={variant}
        {...props}
      />
    </CardVariantContext.Provider>
  );
});
Card.displayName = "Card"

// Map card variant to title color (using new utility classes)
const cardTitleColor: Record<string, string> = {
  "pastel-blue": "card-title-blue",
  "pastel-yellow": "card-title-yellow",
  "pastel-pink": "card-title-pink",
  "charcoal": "text-white",
  "default": "text-foreground",
};

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// CardTitle now uses context to get the variant and applies the correct color
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(CardVariantContext);
  const colorClass = variant && cardTitleColor[variant] ? cardTitleColor[variant] : cardTitleColor.default;
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        colorClass,
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
