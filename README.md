# ios-clean
A way to more easily customize a distraction-free, minimalistic iOS home screen created by [loganthorneloe](https://x.com/loganthorneloe). A full list of icons can be found [here](https://github.com/lathorne/ios-clean/tree/main/imgs/svgs). Icons are sourced from [Icons8](https://icons8.com/icons) and [FontAwesome](https://fontawesome.com/search).

Icons can be downloaded from https://icons.builtbylogan.com. Installation instructions can be found at https://icons.builtbylogan.com/install.

## How this repo works

This repo contains svgs for icons, a python script to generate icons, and a web interface using [React](https://react.dev/), [Next.js](https://nextjs.org/), and the [shadcn ui](https://ui.shadcn.com/). 

## Adding new icons

Icons are added by adding an svg file with a transparent background of the icon to the [/imgs/svgs/](https://github.com/lathorne/ios-clean/tree/main/imgs/svgs) folder. A black version of the svg must also be added to the [/imgs/black_svgs/](https://github.com/lathorne/ios-clean/tree/main/imgs/black_svgs) folder. The [`generate_icons.py`](https://github.com/lathorne/ios-clean/blob/main/generate_icons.py) can then be run to create corresponding white and black pngs with transparent backgrounds.

Example usage of generate_icons: `python generate_icons.py`

A shortcut must created for the icon as well. This can be done via the Shortcuts app by creating a shortcut named the icon app name that opens the app whose icon will be replaced. This shortcut then needs to be downloaded and added to the [/shortcuts/](https://github.com/lathorne/ios-clean/tree/main/shortcuts) folder. This folder needs to be copied into the [`imgs/png-bbl`](https://github.com/lathorne/ios-clean/tree/main/imgs/pngs-bbl) folder.

The [`Icons Generator - builtbylogan`](https://github.com/lathorne/ios-clean/blob/main/imgs/pngs-bbl/Icons%20Generator%20-%20builtbylogan.shortcut) shortcut needs to be redownloaded and readded to the [`imgs/png-bbl`](https://github.com/lathorne/ios-clean/tree/main/imgs/pngs-bbl) folder whenever a change is made to it.

The [`imgs/png-bbl`](https://github.com/lathorne/ios-clean/tree/main/imgs/pngs-bbl) folder needs to be compressed and added to the [`my-app/public/`](https://github.com/lathorne/ios-clean/tree/main/my-app/public) folder each time a change is made to its contents. This is what is served to the user when they press the Download button on the web app.
