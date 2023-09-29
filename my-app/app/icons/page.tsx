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
import Footer from "../footer"
import Nav from "../nav"

interface imgDictionary {
  [key: string]: string;
}

export default function Icons() {

  return (
    <main className="flex flex-col min-h-screen items-center">
      <div>
        <Nav/>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 px-10 pt-6">
        <img className="h-auto max-w-full rounded-lg" src="icons/airbnb.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-fitness.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-photos.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/amazon.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/email.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/gmail.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/chatgpt.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/messages.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/settings.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/phone.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/gdrive.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/whatsapp.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/wechat.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/artifact.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/reddit.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/discord.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/tesla.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/x.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/threads.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/facebook.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/instagram.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/youtube.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/substack.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/safari.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/chrome.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/twitch.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/telegram.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/pokemon-go.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-notes.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/netflix.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/home.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/steam.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/spotify.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-music.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/weather.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/google-photos.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/google-news.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/app-store.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/linkedin.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/files.png" alt=""/>
      </div>
      <div className="px-10 text-center">
        <h1 className="text-l tracking-tight text-muted-foreground py-6">
          <strong>See the list of all 86 icons <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/lathorne/ios-clean/tree/main/imgs/svgs">here</a></strong>.
        </h1>
        <p className="text-l tracking-tight text-muted-foreground py-6">
        A white background has black icons. Icons sourced from <a href="https://icons8.com/icons" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Icons8</a> and <a href="https://fontawesome.com/search" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">FontAwesome</a>.
        </p>
      </div>
    </main>
  )
}