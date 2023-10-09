import React from 'react';
import { useState, useCallback, useEffect } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

export default function Nav() {
  const isBreakpoint = useMediaQuery(768)
  return (
    <div className="pt-5">
      {/* { isBreakpoint ? (
        <div>
          <NavBarSmall />
        </div>
      ) : (
        <div>
           <NavBarFull />
        </div>
      )} */}
      <NavBarSmall/>
    </div>
  )
}

// Leaving this code in case I need to make the nav bar responsive in the future.
export function NavBarSmall(){
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/" legacyBehavior passHref>
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
        <Link href="/icons" legacyBehavior passHref>
          <DropdownMenuItem>Icons</DropdownMenuItem>
        </Link>
        <Link href="/wallpapers" legacyBehavior passHref>
          <DropdownMenuItem>Wallpapers</DropdownMenuItem>
        </Link>
        <Link href="/install" legacyBehavior passHref>
          <DropdownMenuItem>Install</DropdownMenuItem>
        </Link>
        <Link href="https://github.com/lathorne/ios-clean" legacyBehavior passHref>
          <DropdownMenuItem>Source</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function NavBarFull(){
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/icons" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              See the Icons
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/install" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Install
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/lathorne/ios-clean" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Source
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}