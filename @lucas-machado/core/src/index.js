const fs = require('fs');


var projectDirectoriesPaths = [];


const options = {
    withFilesTypes: true
}

const getArchitectureStartingAt = function (folder) {
    const rootPath = require('path').resolve(__dirname, folder);
    let directories = readDirectoriesFrom(rootPath);
    projectDirectoriesPaths.push(rootPath);
    
    directories.forEach(function (directorie) {
        let nextPath = require('path').resolve(rootPath, directorie);
        projectDirectoriesPaths.push(nextPath);
    });
}

function readDirectoriesFrom(path) {
    console.log(path)
    return fs.readdirSync(path, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
}

getArchitectureStartingAt('src');

console.log(projectDirectoriesPaths);

const getDirectories = async source => {
    await fs.promises.readdir(source, options)
        .then(function (diretorios) { })
        .catch();
};