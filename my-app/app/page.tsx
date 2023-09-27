"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import React, { useState, ChangeEvent } from 'react';

function buttonColor(color: string | undefined): string {
  switch (color) {
    case "grey":
      return "bg-icons-grey"
    case "white":
      return "bg-icons-white"
    case "red":
      return "bg-icons-red"
    case "orange":
      return "bg-icons-orange"
    case "purple":
      return "bg-icons-purple"
    case "yellow":
      return "bg-icons-yellow"
    case "green":
      return "bg-icons-green"
    case "pink":
      return "bg-icons-pink"
    case "blue":
      return "bg-icons-blue"
    default: //black
      return "bg-icons-black"
  }
}

function ReRender() {
  console.log("rerender");
}

export default function Home() {

  const [iOSTheme, setiOSTheme] = React.useState<string>("dark");
  const [iconColor, setIconColor] = React.useState<string>("bg-icons-black");

  const handleChange = (color: string): void => {
    setIconColor(color);
  };

  const handleRadioChange = (theme: string): void => {
    setiOSTheme(theme);
  }

  const handleButtonColor = (): string => {
    if (iconColor === "white") {
      return "bg-icons-" + iconColor + " text-black";
    }
    return "bg-icons-" + iconColor;
  };

  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="pt-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/icons" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Examples
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://github.com/lathorne/ios-clean" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight pt-32 px-2">Create a productive, distraction-free home screen.</h1>
          <h1 className="text-2xl tracking-tight pb-20">Download minimalistic icons for your iPhone.</h1>
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
              <Label htmlFor="framework">Select your iOS Theme:</Label>
              <RadioGroup onValueChange={handleRadioChange} defaultValue="dark-theme">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark-theme" id="dark-theme" />
                  <Label htmlFor="dark-theme">Dark Theme</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light-theme" id="light-theme" />
                  <Label htmlFor="light-theme">Light Theme</Label>
                </div>
              </RadioGroup>
            </div>
          </form>
          <div className="flex flex-col items-center pt-4">
            <Button variant="outline" className={handleButtonColor()}>Download icons</Button>
          </div>
          <div className="flex flex-col items-center pt-4 text-sm text-muted-foreground">
            <p className="underline"><a href="https://github.com/lathorne/ios-clean">How to install</a></p>
          </div>
        </div>
      </div>
      <footer className="container flex flex-col text-center fixed bottom-0 items-center content-center justify-center gap-4 md:h-24">
        <p className="text-sm text-muted-foreground">
          Built by <a href="https://x.com/loganthorneloe" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">loganthorneloe</a>. The source code is available on <a href="https://github.com/lathorne/ios-clean" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
        </p>
      </footer>
    </main>
  )
}
