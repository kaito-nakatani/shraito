def crop_center_square(img):
    width, height = img.size
    min_dim = min(width, height)
    left = (width - min_dim) // 2
    top = (height - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    return img.crop((left, top, right, bottom))

default_src = 'assets/_varsha-wedding/'
default_tgt = 'assets/varsha-wedding/'
default_size = (2000,2000)

import argparse
parser = argparse.ArgumentParser(
    """ compress all files in source directory,
        by resizing them to the given shape, 
        and outputting outputting them to the target directory.
    """)
parser.add_argument('--src', type=str, default=default_src)
parser.add_argument('--tgt', type=str, default=default_tgt)
parser.add_argument('--size', type=int, nargs=2, default=default_size)
args = parser.parse_args()

import os
from PIL import Image, ImageOps

num = 1
for fn in os.listdir(args.src):
    if fn == '.DS_Store':
        continue
    im = Image.open(os.path.join(args.src, fn))
    im_fixed = ImageOps.exif_transpose(im)
    im_square = crop_center_square(im_fixed)
    im_square.thumbnail(args.size)
    im_square.save(os.path.join(args.tgt, f'photo{num}.jpg'), "jpeg")
    num += 1
