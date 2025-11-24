"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import BrandLogoColorful from "../ui/icons/brand-logo-colorful";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] w-full bg-blue-950 text-gray-400 dark:bg-slate-800">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center text-xl font-bold">
          <div className="_wrapper mx-4 w-50">
            <BrandLogoColorful />
          </div>
        </Link>

        {/* Center Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="font-semibold text-gray-400">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/services/web-dev">Web Development</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/services/mobile-app">Mobile Apps</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/services/product-dev">Product Development</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/services/generative-ai">Generative AI</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>How we work</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/approach/agile">Agile</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/approach/discovery">Discovery</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button */}
          <Button asChild className=" bg-blue-700 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <ThemeToggle />
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="block rounded-lg p-2 text-slate-700 hover:bg-gray-100 md:hidden"
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Off-Canvas Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[999] bg-black"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-background fixed top-0 right-0 z-[1000] h-full w-4/5 max-w-sm px-6 py-6 shadow-2xl md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-32">
                  <BrandLogoColorful />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-slate-700 hover:bg-gray-100"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-400">
                <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600">
                  About
                </Link>

                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                    Services
                  </p>
                  {[
                    { href: "/services/web-dev", label: "Web Development" },
                    { href: "/services/mobile-app", label: "Mobile Apps" },
                    { href: "/services/product-dev", label: "Product Development" },
                    { href: "/services/generative-ai", label: "Generative AI" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block text-base hover:text-blue-600"
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                    How We Work
                  </p>
                  <Link
                    href="/approach/agile"
                    onClick={() => setOpen(false)}
                    className="block text-base hover:text-blue-600"
                  >
                    Agile
                  </Link>
                  <Link
                    href="/approach/discovery"
                    onClick={() => setOpen(false)}
                    className="block text-base hover:text-blue-600"
                  >
                    Discovery
                  </Link>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    className="text-foreground w-full rounded-lg bg-blue-600 hover:bg-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
