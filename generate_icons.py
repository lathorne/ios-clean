'''
A Python script used to dynamically generated icons.
Currently not used because I can't figure out the color algorithm used by Apple
between the background color darkening and the relationship to the dock color
for both dark and light mode.
'''

from PIL import Image
import cairosvg
import os
import argparse

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

valid_colors = ['blue',
    'purple',
    'yellow',
    'orange',
    'red',
    'green',
    'pink',
    'grey',
    'black',
    'white']

def create_background(hex, save_path):

  # Define the dimensions of the image
  width, height = 900, 1950

  # Create a new blank image
  background = Image.new("RGB", (width, height), hex)

  # Save the final image
  save_img(background, save_path, "background.png")

def create_dir_if_not_exist(path):
  # create 
  if not os.path.exists(path):
    os.makedirs(path)
    print(f"Directory '{path}' created successfully.")

# converts .svg filename to .png
def png_filename(filename):
  result = filename.split('.')[0]
  return result + '.png'

def has_extension(filename, extension):
  _, file_ext = os.path.splitext(filename)
  return file_ext == extension

def save_img(img, save_path, filename):
  create_dir_if_not_exist(save_path)
  img.save(os.path.join(save_path, png_filename(filename)))

def png_exists(pngs_dir, filename):
  if os.path.exists(pngs_dir + filename):
    return True
  else:
    return False
  
def iterate_over_svgs_and_create_icons(color, save_path, svgs_dir, pngs_dir):

  width, height = 500, 500
  extension = ".svg"
  output_dir = save_path

  # Iterate though icon svgs to create a png with the proper background at the right size
  for filename in os.listdir(svgs_dir):
    if os.path.isfile(os.path.join(svgs_dir, filename)) and has_extension(filename, extension):
      
      # Create a new blank image
      img = Image.new("RGB", (width, height), color)

      # Open the SVG image and convert it to a png with transparent background
      # This opens the regular svg, resizes it, and saves to png with transparent background
      if not png_exists(pngs_dir, png_filename(filename)): # won't recreate the resized png if it already exists
        cairosvg.svg2png(url=svgs_dir + filename, write_to=pngs_dir + png_filename(filename), output_width=425, output_height=425)
      resized = Image.open(pngs_dir + png_filename(filename))  # Replace with the actual path

      # Calculate the position to center the SVG
      x_offset = (width - resized.width) // 2
      y_offset = (height - resized.height) // 2

      # Paste the SVG onto the blank image
      img.paste(resized, (x_offset, y_offset), mask=resized)

      # Save the final image
      save_img(img, output_dir, png_filename(filename))

# this needs to be called once for wallpaper icons and once for dock icons (based on theme)
def create_icons(color, save_path):

  dir = "./svgs/"
  black_dir = "./black_svgs/"
  pngs_dir = "./pngs/"
  black_pngs_dir = "./black_pngs/"

  if color == '#F2F2F2' or color == '#F3F3F3' or color == '#c6c6c6':
    # icons with black svgs
    iterate_over_svgs_and_create_icons(color, save_path, black_dir, black_pngs_dir)
  else:
    # icons with white svgs
    iterate_over_svgs_and_create_icons(color, save_path, dir, pngs_dir)
  
'''
save_path should be where all the icons/background will be saved for users to retrieve 
'''
def generate_icons(color):

  save_path = "./" + color

  background_color = '#' + dict[color]['background']
  icons_color = '#' + dict[color]['icons_wallpaper']
  light_dock_icons_color = '#' + dict[color]['icons_dock_light']
  dark_dock_icons_color = '#' + dict[color]['icons_dock_dark']

  create_dir_if_not_exist(save_path)

  # create background
  create_background(background_color, save_path)

  # create all three possible sets of icons
  create_icons(icons_color, save_path + "/wallpaper_icons/")
  create_icons(light_dock_icons_color, save_path + "/light_dock_icons/")
  create_icons(dark_dock_icons_color, save_path + "/dark_dock_icons/")

def generate_all_color_icons():
  generate_icons('blue')
  generate_icons('purple')
  generate_icons('yellow')
  generate_icons('orange')
  generate_icons('red')
  generate_icons('green')
  generate_icons('pink')
  generate_icons('grey')
  generate_icons('black')
  generate_icons('white')
  print('all icons created')

def main():

  parser = argparse.ArgumentParser()
  parser.add_argument("-i", "--colors", help="Colors to generate icons for in a comma separated list")
  args = parser.parse_args()

  colors = args.colors.split(',')

  if "all" in colors:
    generate_icons('blue')
    generate_icons('purple')
    generate_icons('yellow')
    generate_icons('orange')
    generate_icons('red')
    generate_icons('green')
    generate_icons('pink')
    generate_icons('grey')
    generate_icons('black')
    generate_icons('white')
  else:
    for color in colors:
      if color in valid_colors:
        generate_icons(color)
      else:
        print(color + " is not valid.")

  print('icons created')

if __name__ == "__main__":
    main()