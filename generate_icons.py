'''
A Python script used to dynamically generated icons.
Currently not used because I can't figure out the color algorithm used by Apple
between the background color darkening and the relationship to the dock color
for both dark and light mode.
'''

from PIL import Image
import cairosvg

hex = "#000000"
'''
dock color changes for light or dark theme
dock color changes based on dock transparency (Settings>Accessibility>Display&Text>Reduce Transparency)

Apple darkens the background a bit when applied, thus the icons must be slightly darker than the applied background
Apple lightens the background when in dark mode
'''
dict = {
    'red': {
        'background': 'ff3131',
        'icons_wallpaper': 'f0302e',
        'icons_dock_light': 'FF6464',
        'icons_dock_dark': 'b41818',
      },
    'yellow': {
        'background': 'ffdc33',
        'icons_wallpaper': 'F1CF00',
        'icons_dock_light': 'FFE82D',
        'icons_dock_dark': 'bca423',
      }, 
    'orange': {
        'background': 'ff914d',
        'icons_wallpaper': 'F08B4A',
        'icons_dock_light': 'FEB47A',
        'icons_dock_dark': 'b5632f',
      }, 
    'blue': {
        'background': '52d5fb',
        'icons_wallpaper': '4dcaee',
        'icons_dock_light': '79E8FF',
        'icons_dock_dark': '3aa5c3',
      }, 
    'green': {
        'background': '7ed957',
        'icons_wallpaper': '7ACE51',
        'icons_dock_light': 'A0EC7C',
        'icons_dock_dark': '5A9D39',
      }, 
    'purple': {
        'background': 'b08cfe',
        'icons_wallpaper': 'A783F1',
        'icons_wallpaper_dark': 'A783F1',
        'icons_dock_light': 'CEAFFF',
        'icons_dock_dark': '775BB3',
      }, 
    'grey': {
        'background': 'a6a6a6',
        'icons_wallpaper': '9E9E9E',
        'icons_dock_light': 'C5C5C5',
        'icons_dock_dark': '737373',
      }, 
    'black': {
        'background': '000000',
        'icons_wallpaper': '000000',
        'icons_dock_light': '3a3a3a',
        'icons_dock_dark': '232524',
      }, 
    'white': {
        'background': 'ffffff',
        'icons_wallpaper': 'F2F2F2',
        'icons_dock_light': 'F3F3F3',
        'icons_dock_dark': 'c6c6c6',
      }, 
    'pink': {
        'background': 'ff66c4',
        'icons_wallpaper': 'F160B9',
        'icons_dock_light': 'FF91E0',
        'icons_dock_dark': 'B23E86',
      },  
    }

def create_icon(hex, img_name, dock_icons=None):
  if dock_icons is None:
    dock_icons = []

  # Define the dimensions of the image
  width, height = 500, 500

  # Create a new blank image
  blank = Image.new("RGB", (width, height), hex)

  # Open the SVG image
  cairosvg.svg2png(url="white_svgs/airbnb.svg", write_to="output.png", output_width=425, output_height=425)
  resized_svg = Image.open("output.png")  # Replace with the actual path
  # resized_svg = svg.resize((425, 425))

  # Calculate the position to center the SVG
  x_offset = (width - resized_svg.width) // 2
  y_offset = (height - resized_svg.height) // 2

  # Paste the SVG onto the blank image
  blank.paste(resized_svg, (x_offset, y_offset))

  # Save the final image
  blank.save("final_image.png")


def determine_hex_colors(hex):
  pass