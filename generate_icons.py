'''
A Python script used to dynamically generated icons.
Currently not used because I can't figure out the color algorithm used by Apple
between the background color darkening and the relationship to the dock color
for both dark and light mode.
'''

from PIL import Image
import cairosvg

hex = "#000000"

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

# given the background hex color determine the color of the icons and dock icons

'''
dock color changes for light or dark theme
dock color changes based on dock transparency (Settings>Accessibility>Display&Text>Reduce Transparency)

Apple darkens the background a bit when applied, thus the icons must be slightly darker than the applied background

red
background ff3131 (255, 49, 49)
icons f0302e (240, 48, 46)
dock b41818 (180, 24, 24)

yellow
background ffdc33 (255, 220, 51)
icons f0d02f (240, 208, 47)
dock bca423 (188, 164, 35)

black
background 000000 (0, 0, 0)
icons 000000 (0, 0, 0)
dock 232524 (35, 37, 36)

blue
background 52d5fb (82, 213, 251)
icons 4dcaee (77, 202, 238)
dock 3aa5c3 (58, 165, 195)

white
background ffffff (255, 255, 255)
icons f2f2f2 (242, 242, 242)
dock c6c6c6 (198, 198, 198)
'''

def determine_hex_colors(hex):
  pass