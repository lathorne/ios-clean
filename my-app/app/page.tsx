"use client"

import { Button } from "@/components/ui/button"

import React from 'react';
import Nav from "./nav";

export default function Home() {

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
      <div className="flex flex-col items-center justify-between">
        <div className="text-center pt-32 pb-20 px-2">
          <h1 className="text-4xl font-bold tracking-tight">Create a productive, distraction-free home screen</h1>
          <h1 className="text-2xl tracking-tight">Download minimalistic icons for your iPhone for free.</h1>
          <p className="text-sm text-muted-foreground pt-2">
            Built by <a href="https://x.com/loganthorneloe" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">loganthorneloe</a>.
          </p>
        </div>
        <div className="justify-center">
          <div className="flex flex-col items-center pt-4 text-sm">
            <p>If you haven&apos;t install custom iOS icons using shortcuts before,</p>
            <p><a className="underline" href="/install"><strong>read the installation guide first</strong></a>.</p>
          </div>
          <div className="flex flex-col items-center pt-5">
            <Button variant="outline" onClick={() => downloadFile()}>Download Icons</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
