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

import React from 'react';
import Footer from "./footer"

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
    if (iconColor === "white" || iconColor === "yellow") {
      return "bg-" + iconColor + " text-black";
    }
    return "bg-" + iconColor;
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
      {/* janky way to fix bg class issue. */}
      <a className="bg-black"></a>
      <a className="bg-white"></a>
      <a className="bg-orange"></a>
      <a className="bg-red"></a>
      <a className="bg-yellow"></a>
      <a className="bg-purple"></a>
      <a className="bg-blue"></a>
      <a className="bg-green"></a>
      <a className="bg-grey"></a>
      <a className="bg-pink"></a>
      <div className="pt-5">
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/icons" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Example Icons
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
        <div className="text-center pt-32 pb-20 px-2">
          <h1 className="text-4xl font-bold tracking-tight">Create a productive, distraction-free home screen</h1>
          <h1 className="text-2xl tracking-tight">Download minimalistic icons for your iPhone for free.</h1>
          <p className="text-sm text-muted-foreground pt-2">
            Built by <a href="https://x.com/loganthorneloe" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">loganthorneloe</a>.
          </p>
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
      <Footer/>
    </main>
  )
}
