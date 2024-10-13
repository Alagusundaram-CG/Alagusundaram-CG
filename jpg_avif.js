const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the root directory containing folders
const rootDir = 'client/public/img/games';

fs.readdir(rootDir, (err, folders) => {
  if (err) {
    console.error('Error reading root directory:', err);
    return;
  }

  folders.forEach(folder => {
    const folderPath = path.join(rootDir, folder);
    const inputImagePath = path.join(folderPath, 'thumbnail.jpg');
    const outputImagePath = path.join(folderPath, 'thumbnail.avif');

    // Check if the folderPath is a directory
    fs.stat(folderPath, (err, stats) => {
      if (err) {
        console.error(`Error getting stats for ${folderPath}:`, err);
        return;
      }

      if (stats.isDirectory()) {
        // Check if the input image exists
        fs.access(inputImagePath, fs.constants.F_OK, (err) => {
          if (err) {
            console.error(`thumbnail.jpg not found in ${folderPath}:`, err);
            return;
          }

          // Read the input image
          fs.readFile(inputImagePath, (err, inputBuffer) => {
            if (err) {
              console.error('Error reading input file:', err);
              return;
            }

            // Convert the image to AVIF format
            sharp(inputBuffer)
              .toFormat('avif')
              .toBuffer()
              .then(outputBuffer => {
                // Write the AVIF image to the output path
                fs.writeFile(outputImagePath, outputBuffer, err => {
                  if (err) {
                    console.error('Error writing output file:', err);
                  } else {
                    console.log('Conversion to AVIF successful:', outputImagePath);
                  }
                });
              })
              .catch(err => {
                console.error('Error during conversion:', err);
              });
          });
        });
      }
    });
  });
});
