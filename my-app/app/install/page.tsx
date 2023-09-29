"use client"

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Nav from "../nav"

export default function Install() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Nav/>
      <div className="p-10">
        <h1 className="text-4xl font-bold tracking-tight text-center">Icon Installation</h1>
        <h1 className="text-2xl font-bold tracking-tight py-5">How it works</h1>
        <p className="tracking-tight py-3">iPhones don&apos;t support easily theming home screens like Android; however,using a mixture of pictures and shortcuts, users can still create a custom iOS home screen.</p>
        <p className="tracking-tight py-3">This is time consuming because it requires curating custom icon pictures, a matching background, and creating shortcuts for the custom app icons. This is made further complex because iOS slightly adjusts background and dock colors based on device theme and accessibility settings. I&apos;ve created this project to make the custom icon process easier.</p>
        <p className="tracking-tight py-3">To make this work, you&apos;ll need to make sure both the Shortcuts and Files apps are downloaded on your iPhone.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Get your icons, background, and shortcuts</h1>
        <p className="tracking-tight py-3">Visit the <a href="/" className="underline">Home screen</a>, choose a color, and download. Save this file in your Files app. Tap on the .zip download in the Files app to extract all the files to a folder. This file packages everything you need into one folder.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Set your background</h1>
        <p className="tracking-tight py-3">Enter the folder you just extracted and open the &apos;background&apos; file. Press the share button and choose &apos;Save Image&apos;. Then set this image as your wallpaper from the iOS &apos;Photos&apos; app.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Set up each icon</h1>
        <p className="tracking-tight py-3">The following steps will need to be done for each icon you want to add to your home screen.</p>
        <p className="tracking-tight py-3">1. Grab the shortcut from the folder you extracted for the app you want to add to your home screen.</p>
        <p className="tracking-tight py-3">Go to the &apos;shortcuts&apos; folder. Tap the shortcut for the app you need and press &apos;Add Shortcut&apos;.</p>
        <p className="tracking-tight py-3">2. Add the shortcut to your home screen.</p>
        <p className="tracking-tight py-3">Tap the three dots in the top right of the shortcut. Press the arrow next to the shortcut name and choose &apos;Add to Home Screen&apos;. Press the icon next to the name of the shortcut and select &apos;Choose File&apos;. Navigate to the folder you extracted.</p>
        <p className="tracking-tight py-3">You&apos;ll find the picture for your icon in one of three folders:</p>
        <ul className="list-disc">
          <li>
            <strong>wallpaper_icons</strong>: If this app is going to be placed on your home screen but not on the dock.
          </li>
          <li>
            <strong>dark_dock_icons</strong>: If this app is going to be placed on your dock and you use the &apos;dark&apos; system theme.
          </li>
          <li>
            <strong>light_dock_icons</strong>: If this app is going to be placed on your dock and you use the &apos;light&apos; system theme.
          </li>
        </ul>
        <p className="tracking-tight py-3">
        Enter the corresponding folder, and choose the icon for your app (the search bar can help you find this quicker). If you&apos;d like to remove the words under the app icon, press the &apos;X&apos; next to the app icon name.</p>
        <p className="tracking-tight py-3">
        Press &apos;Add&apos; in the upper right corner. This icon is now on your home screen! Repeat this step for all your apps.</p>

        <p className="tracking-tight font-bold py-3">
          Report any issues with installation, icons, colors, etc. <a href="https://github.com/lathorne/ios-clean/issues" className="underline">here</a> or <a href="https://x.com/loganthorneloe" className="underline">message me on X</a>.
        </p>
      </div>
    </main>
  )
}