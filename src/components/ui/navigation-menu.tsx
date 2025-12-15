"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

/* ---------------------------------------------------------
   Base Shared Classes
--------------------------------------------------------- */

const navBase = cn(
  "text-gray-200 dark:text-gray-300",
  "bg-transparent",
  // "hover:bg-gray-200",
  "hover:text-white dark:hover:text-white",
  // "dark:hover:bg-gray-700",
  "data-[state=open]:bg-gray-200 data-[state=open]:text-gray-800",
  "dark:data-[state=open]:bg-gray-600 dark:data-[state=open]:text-white",
  "rounded-md px-3 py-1 transition-colors",
  "whitespace-nowrap break-keep"
);

/* Base for link items */
export const baseLink = cn(navBase, "hover:underline", "inline-flex items-center");

/* Base for triggers (no underline, has dropdown icon) */
export const baseTrigger = cn(navBase, "inline-flex items-center gap-1 font-semibold");

/* ---------------------------------------------------------
   Root
--------------------------------------------------------- */
export function NavigationMenu(props: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  const { className, children, ...rest } = props;

  return (
    <NavigationMenuPrimitive.Root className={cn("relative flex items-center", className)} {...rest}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

/* ---------------------------------------------------------
   List
--------------------------------------------------------- */
export function NavigationMenuList(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.List>
) {
  const { className, ...rest } = props;

  return (
    <NavigationMenuPrimitive.List className={cn("flex items-center gap-1", className)} {...rest} />
  );
}

/* ---------------------------------------------------------
   Item
--------------------------------------------------------- */
export function NavigationMenuItem(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Item>
) {
  const { className, ...rest } = props;

  return <NavigationMenuPrimitive.Item className={cn("relative", className)} {...rest} />;
}

/* ---------------------------------------------------------
   Trigger (Dropdown opener)
--------------------------------------------------------- */
export function _NavigationMenuTrigger(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>
) {
  const { className, children, ...rest } = props;

  return (
    <NavigationMenuPrimitive.Trigger className={cn(baseTrigger, className)} {...rest}>
      {children}
      <ChevronDownIcon className="size-4 transition-transform data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
}
export function NavigationMenuTrigger(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> & {
    href?: string;
  }
) {
  const { className, children, href, ...rest } = props;

  return (
    <div className="relative inline-block">
      {href && (
        <Link
          href={href}
          // className="absolute inset-0 z-0 px-3 py-1"
          aria-label={typeof children === "string" ? children : undefined}
        />
      )}

      <NavigationMenuPrimitive.Trigger
        className={cn(baseTrigger, "pointer-events-none relative z-10", className)}
        {...rest}
      >
        <span className="pointer-events-auto">{children}</span>

        <ChevronDownIcon className="pointer-events-auto size-4 transition-transform data-[state=open]:rotate-180" />
      </NavigationMenuPrimitive.Trigger>
    </div>
  );
}

/* ---------------------------------------------------------
   Link
--------------------------------------------------------- */
export function NavigationMenuLink(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Link>
) {
  const { className, ...rest } = props;

  return <NavigationMenuPrimitive.Link asChild className={cn(baseLink, className)} {...rest} />;
}

/* ---------------------------------------------------------
   Content (Dropdown menu)
--------------------------------------------------------- */
export function NavigationMenuContent(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Content>
) {
  const { className, ...rest } = props;

  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "absolute top-full left-0 mt-2 rounded-md p-4",
        "bg-blue-950 dark:bg-gray-800",
        "border border-blue-600 shadow-lg dark:border-gray-700",
        "min-w-fit",
        className
      )}
      {...rest}
    />
  );
}
