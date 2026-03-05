const fs = require('fs');
const path = require('path');
const jimp = require('jimp');

/**
 * 将PNG图片转换为WebP格式
 * @param {string} sourceDir 源目录
 * @param {string} destDir 目标目录
 */
async function convertPngToWebP(sourceDir, destDir) {
  // 确保目标目录存在
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // 读取源目录中的所有文件
  const files = fs.readdirSync(sourceDir);
  
  // 过滤出PNG文件
  const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');
  
  console.log(`找到 ${pngFiles.length} 个PNG文件需要转换`);
  
  for (const file of pngFiles) {
    const sourcePath = path.join(sourceDir, file);
    const filenameWithoutExt = path.parse(file).name;
    const destPath = path.join(destDir, `${filenameWithoutExt}.webp`);
    
    try {
      // 使用jimp进行转换
      const image = await jimp.read(sourcePath);
      await image.quality(80).writeAsync(destPath);
      console.log(`已转换: ${file} -> ${filenameWithoutExt}.webp`);
    } catch (error) {
      console.error(`转换失败: ${file}`, error.message);
    }
  }
}

// 转换images和img目录下的PNG文件
(async () => {
  await convertPngToWebP('./images', './news');
  await convertPngToWebP('./img', './webp');
  console.log('转换完成!');
})();