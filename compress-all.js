import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Target directory (root folder of your project)
const dir = './';

async function compressWebpImages() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.toLowerCase().endsWith('.webp')) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      // Only compress files larger than 500 KB (512,000 bytes)
      if (stats.size > 500 * 1024) {
        console.log(`Compressing ${file} (Original size: ${(stats.size / 1024).toFixed(1)} KB)...`);
        
        const tempPath = path.join(dir, `temp_${file}`);

        try {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true }) // Keeps aspect ratio, scales down max width if huge
            .webp({ quality: 80 }) // 80% quality slashes size with zero noticeable quality drop
            .toFile(tempPath);

          // Overwrite the original file with the compressed version
          fs.renameSync(tempPath, filePath);
          console.log(`Successfully compressed ${file}!`);
        } catch (err) {
          console.error(`Failed to process ${file}:`, err);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

compressWebpImages();
