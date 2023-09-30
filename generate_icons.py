'''
A Python script used to generate transparent pngs for iOS icons.
'''

import cairosvg
import os

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
  
def iterate_over_svgs_and_create_pngs(svgs_dir, pngs_dir):

  extension = ".svg"

  # Iterate though icon svgs to create a png with the proper background at the right size
  for filename in os.listdir(svgs_dir):
    if os.path.isfile(os.path.join(svgs_dir, filename)) and has_extension(filename, extension):

      # This opens the regular svg, resizes it, and saves to png with transparent background
      cairosvg.svg2png(url=svgs_dir + filename, write_to=pngs_dir + png_filename(filename), output_width=425, output_height=425)


# this needs to be called once for wallpaper icons and once for dock icons (based on theme)
def create_pngs():

  dir = "./imgs/svgs/"
  black_dir = "./imgs/black_svgs/"
  pngs_dir = "./imgs/pngs-bbl/white_pngs/"
  black_pngs_dir = "./imgs/pngs-bbl/black_pngs/"

  # make sure write dirs exist
  create_dir_if_not_exist(dir)
  create_dir_if_not_exist(black_dir)
  create_dir_if_not_exist(pngs_dir)
  create_dir_if_not_exist(black_pngs_dir)
 
  # create black pngs
  iterate_over_svgs_and_create_pngs(black_dir, black_pngs_dir)
  # create white pngs
  iterate_over_svgs_and_create_pngs(dir, pngs_dir)

def main():

  create_dir_if_not_exist("./imgs/")
  create_dir_if_not_exist("./imgs/pngs-bbl/")
  create_pngs()

  print('icons created')

if __name__ == "__main__":
    main()