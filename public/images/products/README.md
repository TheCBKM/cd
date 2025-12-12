# Product Images Directory

This directory contains product images referenced in `src/lib/products.json`.

## Image Naming Convention

Images should be named according to the filenames specified in the `images` array of each product in `products.json`.

For example:

- `moringa-1.jpg`
- `moringa-2.jpg`
- `moringa-3.jpg`
- `wheatgrass-1.jpg`
- etc.

## Image Requirements

- Format: JPG, PNG, or WebP
- Recommended size: 1200x1200px (square) or 1200x800px (landscape)
- File size: Optimized for web (under 500KB per image)
- Quality: High quality, well-lit product photos

## Adding New Images

1. Add the image file to this directory with the appropriate filename
2. Reference the filename in the product's `images` array in `src/lib/products.json`
3. The images will automatically be displayed in the product carousel on individual product pages
