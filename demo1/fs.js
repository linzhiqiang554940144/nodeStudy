var fs = require('fs')
fs.writeFile('fsTest.js', 'hello', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('写入成功')
    }
})
fs.appendFile('fsTest.js', '追加成功', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('写入成功')
    }
})
fs.readFile('fsTest.js', (err, data) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log("读取文件成功！");
        console.log(data.toString());
        // Console：
        // 读取文件成功！
        // <Buffer 48 65 6c 6c 6f 20 6a 73 6c 69 61 6e 67 e8 bf 99 e6 ae b5 e6 96 87 e6 9c ac e6 98 af e8 a6 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>
    }
})