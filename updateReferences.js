const fs = require('fs');
const path = require('path');

// 定义需要处理的文件类型
const fileTypes = ['.css', '.js', '.html'];
const directories = ['.', 'css', 'js', 'about_files', 'styles'];

// 需要替换的图片映射
const imageReplacements = [
  // images目录下的图片
  { from: '../images/search_bg.png', to: '../webp/search_bg.webp' },
  { from: '../images/search.png', to: '../webp/search.webp' },
  { from: '../images/hotn.png', to: '../webp/hotn.webp' },
  { from: '../images/top_bg.png', to: '../webp/top_bg.webp' },
  { from: '../images/back.png', to: '../webp/back.webp' },
  { from: '/images/btn_playb.png', to: '/webp/btn_playb.webp' },
  { from: '/images/stark2.png', to: '/webp/stark2.webp' },
  { from: '/images/stars2.png', to: '/webp/stars2.webp' },
  { from: '/images/Whack__a__Mole.png', to: '/webp/Whack__a__Mole.webp' },
  { from: '/images/Rabbit__Zombie__Game.png', to: '/webp/Rabbit__Zombie__Game.webp' },
  { from: '/images/OFO__Adventure.png', to: '/webp/OFO__Adventure.webp' },
  { from: '/images/Racing__Champion.png', to: '/webp/Racing__Champion.webp' },
  { from: '/images/Drone__Wars.png', to: '/webp/Drone__Wars.webp' },
  { from: '/images/Furious__Flyers.png', to: '/webp/Furious__Flyers.webp' },
  // 可以继续添加更多映射...
  
  // img目录下的图片
  { from: './img/hot.png', to: './webp/hot.webp' },
  { from: './img/racing-game.png', to: './webp/racing-game.webp' },
  { from: './img/shooting-game.png', to: './webp/shooting-game.webp' },
  { from: './img/action-game.png', to: './webp/action-game.webp' },
  { from: './img/casual.png', to: './webp/casual.webp' },
  { from: './img/girls.png', to: './webp/girls.webp' },
  { from: './img/logo.png', to: './webp/logo.webp' },
  { from: './img/list.png', to: './webp/list.webp' },
  { from: './img/icon-search.png', to: './webp/icon-search.webp' },
  { from: '/img/icon_game.png', to: '/webp/icon_game.webp' },
  { from: './img/Home Loan.png', to: './webp/Home Loan.webp' }
];

/**
 * 更新单个文件中的图片引用
 * @param {string} filePath 文件路径
 */
function updateFileReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // 替换图片引用
    imageReplacements.forEach(replacement => {
      const regex = new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (regex.test(content)) {
        content = content.replace(regex, replacement.to);
        updated = true;
        console.log(`在文件 ${filePath} 中替换了 ${replacement.from} 为 ${replacement.to}`);
      }
    });
    
    // 如果文件被修改，则写回
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`已更新文件: ${filePath}`);
    }
  } catch (error) {
    console.error(`处理文件时出错 ${filePath}:`, error.message);
  }
}

/**
 * 遍历目录并处理文件
 * @param {string} dir 目录路径
 */
function processDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // 递归处理子目录
        processDirectory(fullPath);
      } else if (stat.isFile()) {
        // 检查文件扩展名
        const ext = path.extname(file).toLowerCase();
        if (fileTypes.includes(ext)) {
          updateFileReferences(fullPath);
        }
      }
    });
  } catch (error) {
    console.error(`处理目录时出错 ${dir}:`, error.message);
  }
}

// 处理指定的目录
directories.forEach(dir => {
  const fullPath = path.join('.', dir);
  if (fs.existsSync(fullPath)) {
    processDirectory(fullPath);
  }
});

console.log('图片引用更新完成!');