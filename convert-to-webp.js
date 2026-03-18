const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets', 'img');

function convertToWebp(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            convertToWebp(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const webPath = fullPath.replace(ext, '.webp');
                
                // Avoid reconverting if webp already exists
                if (!fs.existsSync(webPath)) {
                    sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(webPath)
                        .then(() => {
                            console.log(`Converted: ${file} -> ${path.basename(webPath)}`);
                            // Optional: remove original file
                            // fs.unlinkSync(fullPath);
                        })
                        .catch(err => console.error(`Error converting ${file}:`, err));
                }
            }
        }
    });
}

console.log('Starting WebP conversion...');
convertToWebp(targetDir);
console.log('WebP conversion script initialized.');
