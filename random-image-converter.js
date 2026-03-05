const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

/**
 * 获取指定目录下所有支持的图片文件
 * @param {string} dirPath - 目录路径
 * @returns {string[]} 图片文件路径数组
 */
function getImageFiles(dirPath) {
  const imageExtensions = ['.webp'];
  const files = [];
  
  function walkDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // 递归遍历子目录
        walkDirectory(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDirectory(dirPath);
  return files;
}

/**
 * 随机获取指定数量的图片文件
 * @param {string[]} allImages - 所有图片文件路径
 * @param {number} count - 需要随机获取的数量
 * @returns {string[]} 随机选择的图片文件路径数组
 */
function getRandomImages(allImages, count) {
  if (allImages.length < count) {
    console.warn(`警告: 只有 ${allImages.length} 张图片，少于需要的 ${count} 张`);
    return allImages;
  }

  // 使用Fisher-Yates洗牌算法的前count个元素
  const result = [...allImages]; // 创建副本
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * (result.length - i)) + i;
    // 交换元素
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }
  
  return result.slice(0, count);
}

/**
 * 将图片转换为webp格式并重命名
 * @param {string} sourcePath - 源图片路径
 * @param {string} destPath - 目标路径
 * @returns {Promise<void>}
 */
async function convertToWebp(sourcePath, destPath) {
  try {
    const image = await Jimp.read(sourcePath);
    await image.quality(80).writeAsync(destPath);
    console.log(`已转换: ${sourcePath} -> ${destPath}`);
  } catch (error) {
    console.error(`转换失败: ${sourcePath}`, error.message);
  }
}

/**
 * 主函数：随机获取指定数量的图片，转换为webp格式并重命名
 * @param {string} sourceDir - 源目录
 * @param {string} destDir - 目标目录
 * @param {number} count - 需要获取的图片数量
 */
async function randomImageConverter(sourceDir, destDir, count = 35) {
  // 确保目标目录存在
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // 获取所有图片文件
  console.log(`正在扫描目录: ${sourceDir}`);
  const allImages = getImageFiles(sourceDir);
  console.log(`找到 ${allImages.length} 张图片`);

  if (allImages.length < count) {
    console.warn(`警告: 目标目录中的图片数量(${allImages.length})少于请求的数量(${count})`);
    count = allImages.length;
  }

  // 随机选择图片，确保不重复
  const selectedImages = getRandomImages(allImages, count);
  console.log(`随机选择了 ${selectedImages.length} 张不重复的图片`);

  // 转换并保存图片
  for (let i = 0; i < selectedImages.length; i++) {
    const sourcePath = selectedImages[i];
    const destPath = path.join(destDir, `${i + 1}.webp`);
    
    await convertToWebp(sourcePath, destPath);
  }

  console.log(`完成! 已将 ${selectedImages.length} 张不重复的图片保存到 ${destDir}`);
}

// 使用示例
if (require.main === module) {
  // 默认参数
  const sourceDir = process.argv[2] || './images';  // 默认源目录
  const destDir = process.argv[3] || './output';    // 默认输出目录
  const count = parseInt(process.argv[4]) || 35;    // 默认数量35

  console.log(`源目录: ${sourceDir}`);
  console.log(`目标目录: ${destDir}`);
  console.log(`图片数量: ${count}`);

  randomImageConverter(sourceDir, destDir, count)
    .catch(err => {
      console.error('执行出错:', err);
      process.exit(1);
    });
}

module.exports = { randomImageConverter, getImageFiles, getRandomImages, convertToWebp };