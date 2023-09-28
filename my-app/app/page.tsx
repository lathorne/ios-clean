"use client"

import Link from "next/link"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import React, { useState, ChangeEvent } from 'react';

let icloud_links: { [key: string]: any } = {
  'black': 'https://www.icloud.com/iclouddrive/0baEhyCzNhjgq28Zbvz7wEb1w#black',
  'blue': 'https://www.icloud.com/iclouddrive/042_kKQxXvuwPh-LOdACP2Mew#blue',
  'green': 'https://www.icloud.com/iclouddrive/0b7Ji-T0HN-ZU86dYMmYkK_0Q#green',
  'grey': 'https://www.icloud.com/iclouddrive/03cJ9RbhN_55X1rY6wpU0zwHA#grey',
  'orange': 'https://www.icloud.com/iclouddrive/01d2eAOjJwMFQu9ecqxwZbyDQ#orange',
  'pink': 'https://www.icloud.com/iclouddrive/023o5T1oykxzYmCg63FeM-oFQ#pink',
  'purple': 'https://www.icloud.com/iclouddrive/0ddp6fqQpZRuX7zKNCIa0i02w#purple',
  'red': 'https://www.icloud.com/iclouddrive/093jdGHNb1e3ELWDcB0uqk0Yg#red',
  'white': 'https://www.icloud.com/iclouddrive/012seIYj53FDD2k1ErG2wpjog#white',
  'yellow': 'https://www.icloud.com/iclouddrive/01aYNNSuaONzde1eWu11j5zUA#yellow',
}

let download_files: { [key: string]: any } = {
  'black': '/zips/black.zip',
  'blue': '/zips/blue.zip',
  'green': '/zips/green.zip',
  'grey': '/zips/grey.zip',
  'orange': '/zips/orange.zip',
  'pink': '/zips/pink.zip',
  'purple': '/zips/purple.zip',
  'red': '/zips/red.zip',
  'white': '/zips/white.zip',
  'yellow': '/zips/yellow.zip',
}

export default function Home() {

  const [iconColor, setIconColor] = React.useState<string>("black");

  const handleChange = (color: string): void => {
    setIconColor(color);
  };

  const handleButtonColor = (): string => {
    if (iconColor === "white") {
      return "bg-icons-" + iconColor + " text-black";
    }
    return "bg-icons-" + iconColor;
  };

  function downloadFile() {

    const a = document.createElement("a");
    a.href = download_files[iconColor];
    a.download = iconColor + '.zip';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(download_files[iconColor]);
  };

  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="pt-5">
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/icons" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  See the Icons
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://github.com/lathorne/ios-clean" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Info
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight pt-32 px-2">Create a productive, distraction-free home screen.</h1>
          <h1 className="text-2xl tracking-tight pb-20">Download minimalistic icons for your iPhone for free.</h1>
        </div>
        <div className="justify-center">
          <form>
            <div className="flex flex-col space-y-1.5 gap-2">
              <Label htmlFor="color">Select your icon color:</Label>
              <Select onValueChange={handleChange} defaultValue="black">
                <SelectTrigger id="color">
                  <SelectValue defaultValue="black" placeholder="Black" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="grey">Grey</SelectItem>
                  <SelectItem value="pink">Pink</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
          <div className="flex flex-col items-center pt-4">
            <Button variant="outline" onClick={() => downloadFile()} className={handleButtonColor()}>Download</Button>
          </div>
          <div className="flex flex-col items-center pt-4 text-sm text-muted-foreground">
            <p className="underline"><a href="https://github.com/lathorne/ios-clean#how-it-works">How to install</a></p>
          </div>
        </div>
      </div>
      <footer className="container flex flex-col text-center fixed bottom-0 items-center content-center justify-center gap-4 md:h-24">
        <p className="text-sm text-muted-foreground">
          Built by <a href="https://x.com/loganthorneloe" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">loganthorneloe</a>. The source code is available on <a href="https://github.com/lathorne/ios-clean" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>. Icons sources from <a href="https://icons8.com/icons" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Icons8</a> and <a href="https://fontawesome.com/search" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">FontAwesome</a>.
        </p>
      </footer>
    </main>
  )
}
