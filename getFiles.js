const fse = require('fs-extra');
const path = require('path');

function getIconObject(filename) {
    const parts = filename.split('_');

}

async function getFiles(dir) {
    const dirName = dir.split('/').reverse()[0];
    const contents = await fse.readdir(dir);

    const data = contents.map(async item => {
        const stats = await fse.stat(`${dir}/${item}`);
        if (stats.isDirectory()) {
            return getFiles(`${dir}/${item}`);
        } else {
            return Promise.resolve({
                path: `${dirName}/${item}`
            });
        }
    });
    return {
        name: dirName,
        items: await Promise.all(data)
    };
}

getFiles('src/iconoteka')
    .then(files => fse.writeFileSync('src/iconoteka/iconoteka.json', JSON.stringify(files, null, 2)));
