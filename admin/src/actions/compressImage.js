import imageCompression from 'browser-image-compression';

async function compressImage(file) {
  const options = {
    maxSizeMB: 0.15,  // 150KB = 0.15MB
    maxWidthOrHeight: 1280,
    useWebWorker: true
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
}

export default compressImage;