"use client"

import React from 'react';
import Nav from "../nav"

import { Button } from "@/components/ui/button"

export default function Icons() {

  function downloadFile() {

    const download = 'iconsbylogan.zip'

    const a = document.createElement("a");
    a.href = download;
    a.download = download;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(download);
  };

  return (
    <main className="flex flex-col min-h-screen items-center">
      <div>
        <Nav/>
      </div>
      <div className="p-10 lg:px-80">
        <h1 className="text-4xl font-bold tracking-tight text-center">Icons</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pt-5">
          <img className="h-auto max-w-full rounded-lg" src="icons/airbnb.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/amazon.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/app-store.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-fitness.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-health.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-maps.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-music.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-news.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-notes.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-photos.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-store.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/apple-tv.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/arc.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/artifact.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/calendar.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/camera.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/chatgpt.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/chrome.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/cloudflare.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/complete.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/contacts.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/discord.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/disney-plus.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/dropbox.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/email.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/f1.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/facebook.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/feedly.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/files.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/find-my.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/gchat.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/gdrive.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/gmail.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-calendar.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-home.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-keep.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-maps.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-news.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-photos.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google-tasks.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/google.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/groupme.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/home.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/instagram.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/linkedin.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/medium.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/messages.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/messenger.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/netflix.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/notes.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/notion.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/onedrive.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/opera.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/phone.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/pinterest.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/podcast.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/pokemon-go.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/reddit.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/reminders.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/safari.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/settings.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/shortcuts.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/snapchat.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/soundcloud.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/spotify.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/steam.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/substack.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/target.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/telegram.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/tesla.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/threads.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/tiktok.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/tinder.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/twitch.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/twitter.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/uber.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/venmo.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/voice-memos.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/weather.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/wechat.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/whatsapp.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/x.png" alt=""/>
          <img className="h-auto max-w-full rounded-lg" src="icons/youtube.png" alt=""/>
        </div>
        <div className="flex flex-col items-center pt-5">
          <Button variant="outline" onClick={() => downloadFile()}>Download Icons</Button>
        </div>
        <div className="px-10 text-center">
          <h1 className="text-l tracking-tight text-muted-foreground py-6">
            See the list of 86 icons <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/lathorne/ios-clean/tree/main/imgs/svgs">here</a>. You can add your own icons by adding a black or white png with a transparent background of the icon you want to use to the folder with the rest of the icons. More detailed info <a className="underline" href="https://github.com/lathorne/ios-clean#adding-new-icons">here</a>.
          </h1>
          <p className="text-l tracking-tight text-muted-foreground py-6">
          Icons come in both white and black. Icons sourced from <a href="https://icons8.com/icons" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Icons8</a> and <a href="https://fontawesome.com/search" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">FontAwesome</a>.
          </p>
        </div>
      </div>
    </main>
  )
}