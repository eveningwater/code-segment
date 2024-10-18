const fs = require('fs');
const path = require('path');

function camelToSnake(camelCase) {
    return camelCase.replace(/([a-z])([A-Z])/g, '\$1-\$2').toLowerCase();
}

function replaceInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const modifiedContent = content.replace(/\b[a-z]+(?:[A-Z][a-z]*)*\b/g, (match) => camelToSnake(match));
    fs.writeFileSync(filePath, modifiedContent);
}

const replacePath = (directoryPath, fileSuffixList = ['.js','.ts','.md']) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            if (fileSuffixList.includes(path.extname(file))) {
                replaceInFile(filePath);
            }
        });
    });
}

function renameFilesInDirectory(directoryPath) {
    return new Promise((resolve,reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error(`无法读取目录: ${err}`);
                return;
            }
    
            files.forEach(file => {
                const filePath = path.join(directoryPath, file);
                const fileStat = fs.statSync(filePath);
    
                if (fileStat.isFile()) {
                    const newFileName = camelToSnake(file);
                    const newFilePath = path.join(directoryPath, newFileName);
    
                    if (newFileName !== file) {
                        fs.rename(filePath, newFilePath, (err) => {
                            if (err) {
                                console.error(`重命名文件失败: ${err}`);
                                reject(err);
                            } else {
                                console.log(`已将 ${file} 重命名为 ${newFileName}`);
                                resolve(true);
                            }
                        });
                    }
                }
            });
        });
    })
}

// renameFilesInDirectory('../codes/git');

replacePath('./test')