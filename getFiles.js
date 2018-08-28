const fse = require('fs-extra');

function getIconName(filename) {
  if (!filename.includes('iconoteka_')) {
    return null;
  }

  const name = filename
    .split('.svg')[0]
    .split('iconoteka_')[1]
    .split('__')[0]
    .split('_')
    .filter(word => word.length > 1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  console.log(filename, name);
  return name;
}

async function getFiles(dir) {
  const dirName = dir.split('/').reverse()[0];
  const contents = await fse.readdir(dir);

  const data = contents.map(async (item) => {
    const stats = await fse.stat(`${dir}/${item}`);
    if (stats.isDirectory()) {
      return getFiles(`${dir}/${item}`);
    }

    const [category, style] = item.split('.svg')[0].split('_').slice(-2);

    const categories = {
      b: 'bold',
      r: 'regular',
      l: 'light',
    };

    return Promise.resolve({
      isFill: style === 'f' || style === 'b',
      isStroke: style === 's' || style === 'b',
      category: categories[category],
      name: getIconName(item),
      fileName: item,
      path: `${dirName}/${item}`,
    });
  });

  return {
    name: dirName,
    items: await Promise.all(data),
  };
}

getFiles('src/iconoteka')
  .then(files => fse.writeFileSync('src/iconoteka/iconoteka.json', JSON.stringify(files, null, 2)));
