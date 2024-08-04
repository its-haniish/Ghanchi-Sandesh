const sharp = require('sharp');

async function compressImage(buffer) {
  try {
    const compressedImage = await sharp(buffer)
      .resize({ width: 800, height: 600, fit: 'inside' })
      .jpeg({ quality: 80 })
      .toBuffer();
    
    return compressedImage;
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
}

module.exports = compressImage;