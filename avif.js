const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const inputDir = './client/'; // Change this to your directory

// Function to convert image to AVIF format
const convertToAvif = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .avif({ quality: 50 })
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

// Function to traverse directories and convert images
const convertImagesInDirectory = async (dir) => {
  const items = await fs.readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await convertImagesInDirectory(fullPath); // Recursively convert images in subdirectories
    } else if (stat.isFile() && /\.(jpe?g|png|gif|bmp|tiff?)$/i.test(item)) {
      const outputFilePath = fullPath.replace(/\.\w+$/, '.avif');
      await convertToAvif(fullPath, outputFilePath);
    }
  }
};

// Start the conversion process
convertImagesInDirectory(inputDir)
  .then(() => console.log('Conversion completed!'))
  .catch((error) => console.error('Error:', error));
