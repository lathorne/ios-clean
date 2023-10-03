"use client"

import React from 'react';
import Nav from "../nav"

export default function Install() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Nav/>
      <div className="p-10 lg:px-80">
        <h1 className="text-4xl font-bold tracking-tight text-center">Icon Installation</h1>
        <h1 className="text-2xl font-bold tracking-tight py-5">Setup</h1>
        <p className="tracking-tight py-3">Make sure both the Shortcuts and Files apps are downloaded on your iPhone. Go to Settings &gt; Shortcuts &gt; Advanced on your iPhone and turn on &apos;Allow Sharing Large Amounts of Data&apos;.</p>

        <p className="tracking-tight py-3">Note: because your home screen icons will actually be shortcuts, all badges on those icons will be disabled.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Get your icons, background, and shortcuts</h1>
        <p className="tracking-tight py-3">Visit <a href="/" className="underline">Home</a> and download your icons. Save this file in your Files app following the pictures shown below.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/1.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/2.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/3.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/4.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/5.png"/>
        </div>
        <p className="tracking-tight py-3">Tap on the .zip download in the Files app to extract all the files to a folder. The extracted folder contains a shortcut to generate your icons, the shortcuts to create custom icons, and the pngs for creating both black and white icons.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/5.5.png"/>
        </div>

        <h1 className="text-2xl font-bold tracking-tight py-5">Set your background</h1>
        <p className="tracking-tight py-3">Choose a solid color background you want to use. This can be done via the Wallpaper settings in the Settings app. The wallpaper needs to be one solid color but it can be whatever color you choose.</p>
        <p className="tracking-tight py-3">Remove all the icons from your dock, edit your home screen, and swipe left. Screenshot this empty page. It is used by the icon generating shortcut to ensure your icons match your home screen background.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Generate your icons</h1>
        <p className="tracking-tight py-3">Go into the folder you extracted. Press the &apos;Icons Generator - bylogan&apos; shortcut to add it to your Shortcuts app. Run this shortcut.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/6.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/7.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/8.png"/>
        </div>
        <p className="tracking-tight py-3">When first prompted, select the background screenshot from the previous step.</p>
        <p className="tracking-tight py-3">Select wallpaper icons (you can run this shortcut a second time to create icons that will blend in with your dock). Wallpaper icons match your background color and dock icons match the color of your dock.</p>
        <p className="tracking-tight py-3"> Select the folder with the icon pngs. Navigate to the extracted folder and choose &apos;black_pngs&apos; or &apos;white_pngs&apos; (or wherever you&apos;re storing custom icon pngs if you are creating custom icons) depending on the color you want the logos to be on your icons. </p>
        <p className="tracking-tight py-3">Choose your icon size (examples below). The shortcut will start generating icons. You might have a popup appear. Press &apos;Always Allow&apos; to let the shortcut save the icon pictures. The shortcut will run and your icon pictures will be in your Photos app.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/icons_sizes.jpg"/>
        </div>
        <p className="tracking-tight py-3"> Run the shortcut again for dock icons if desired.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Set up each icon</h1>
        <p className="tracking-tight py-3">The following steps will need to be done for each icon you want to add to your home screen.</p>
        <p className="tracking-tight py-3">Go to the &apos;pngs_shortcuts&apos; folder in the folder you extracted. Search for the app you&apos;re making a shortcut for. Tap the shortcut for the app you need and press &apos;Add Shortcut&apos;.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/8.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/9.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/9.5.png"/>
        </div>
        <p className="tracking-tight py-3">Tap the three dots in the top right of the shortcut. Press the arrow next to the shortcut name and choose &apos;Add to Home Screen&apos;.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/10.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/11.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/12.png"/>
        </div>
        <p className="tracking-tight py-3">Press the icon next to the name of the shortcut and select &apos;Choose Photo&apos;. Select the photo you need from the photos you generated.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/14.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/15.png"/>
        </div>
        <p className="tracking-tight py-3">If you&apos;d like to remove the words under the app icon, press the &apos;X&apos; next to the app icon name. Press &apos;Add&apos; in the upper right corner. This icon is now on your home screen! Repeat this step for all your apps.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/13.png"/>
          <img className="h-auto max-w-full rounded-lg" src="icons_install_pics/16.png"/>
        </div>
        <p className="tracking-tight py-3">Repeat for each icon.</p>

        <h1 className="text-2xl font-bold tracking-tight py-5">Custom icons</h1>
        <p className="tracking-tight py-3">If an icon you want is missing, you can create your own icon. You need to get the logo you want as a square, transparent background .png file. You can put that file into a folder on your iPhone in the Files app and use the Icons Generator shortcut to turn it into an icon using the steps above in &apos;Generate your icons&apos;.</p>
      
        <p className="tracking-tight font-bold py-3">
          Report any issues with installation, icons, colors, etc. <a href="https://github.com/lathorne/ios-clean/issues" className="underline">here</a> or <a href="https://x.com/loganthorneloe" className="underline">message me on X</a>.
        </p>
      </div>
    </main>
  )
}