"use client"

import React from 'react';
import Nav from "../nav"
import { Button } from "@/components/ui/button"


export default function Icons() {

  function downloadWallpaper(name: string) {

    const download = 'wallpapers/' + name

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
        <h1 className="text-4xl font-bold tracking-tight text-center">Wallpapers</h1>
        <div className="px-10 text-center">
          <h1 className="text-l tracking-tight text-muted-foreground py-6">
            These are wallpapers that work well with the icons generator. Some may require using empty widget to push icons down.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
          <div>
            <p className="text-l tracking-tight text-muted-foreground text-center py-6">Ocean</p>
            <img className="h-auto max-w-full rounded-lg" src="wallpapers/beach.png" alt=""/>
            <div className="flex flex-col items-center pt-5">
              <Button variant="outline" onClick={() => downloadWallpaper("beach.png")}>Download</Button>
            </div>
          </div>
          <div>
            <p className="text-l tracking-tight text-muted-foreground text-center py-6">Black</p>
            <img className="h-auto max-w-full rounded-lg" src="wallpapers/black.png" alt=""/>
            <div className="flex flex-col items-center pt-5">
              <Button variant="outline" onClick={() => downloadWallpaper("black.png")}>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}