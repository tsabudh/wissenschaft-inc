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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[1000] w-full bg-zinc-200 text-slate-500">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            Wissenschaft
          </span>
          <span>Inc.</span>
        </Link>

        {/* Center Nav */}
        <NavigationMenu>
          <NavigationMenuList className="">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="font-semibold text-slate-500">
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
              <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink asChild>
                  <Link href="/tech/react">React</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/tech/node">Node.js</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Clients</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink asChild>
                  <Link href="/clients/startups">Startups</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/clients/enterprises">Enterprises</Link>
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

            <NavigationMenuItem>
              <Link href="/careers" passHref>
                <NavigationMenuLink>Careers</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" passHref>
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <Button asChild className="border border-blue-500 bg-slate-950 text-white">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}
