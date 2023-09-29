# ios-clean
A way to more easily customize a distraction-free, minimalistic iOS home screen created by [loganthorneloe](https://x.com/loganthorneloe). A full list of icons can be found [here](https://github.com/lathorne/ios-clean/tree/main/imgs/svgs). Icons are sourced from [Icons8](https://icons8.com/icons) and [FontAwesome](https://fontawesome.com/search).

Icons can be downloaded from https://icons.builtbylogan.com. Installation instructions can be found at https://icons.builtbylogan.com/install.

## How this repo works

This repo contains svgs for icons, a python script to generate icons, and a web interface using [React](https://react.dev/), [Next.js](https://nextjs.org/), and the [shadcn ui](https://ui.shadcn.com/). 

## Adding new icons

Icons are added by adding an svg file with a transparent background of the icon to the [/imgs/svgs/](https://github.com/lathorne/ios-clean/tree/main/imgs/svgs) folder. A black version of the svg must also be added to the [/imgs/black_svgs/](https://github.com/lathorne/ios-clean/tree/main/imgs/black_svgs) folder. The [`generate_icons.py`](https://github.com/lathorne/ios-clean/blob/main/generate_icons.py) can then be run to create corresponding white and black pngs and icons and overlay them onto the available color options.

Example usage of generate_icons: `python generate_icons.py --colors=blue,purple` or `python generate_icons.py --colors=all`

A shortcut must created for the icon as well. This can be done via the Shortcuts app by creating a shortcut named the icon app name that opens the app whose icon will be replaced. This shortcut then needs to be downloaded and added to the [/shortcuts/](https://github.com/lathorne/ios-clean/tree/main/shortcuts) folder. This folder needs to be copied to each of the color folders created in the previous step so they are available in the zips downloaded by the user.

The color folders then need to be compressed and added to the [/my-app/public/zips/](https://github.com/lathorne/ios-clean/tree/main/my-app/public/zips) folder and pushed to the server.

## Adding new colors

To add a new color, one must choose a background color. Apply that as the background on an iPhone, take a screenshot, transfer back to a computer, and color pick it. This is because Apple slightly alters the hex code of the background color. The dock color must also be color picked and this needs to be done for both light and dark themes. This means a screenshot of the home screen with the desired background must be taken and transferred to a computer twice (once for dark and once for light theme).

Then the background, dark dock icons, light dock icons, and wallpaper icons hex codes need to be added to the dict in the python script.
