const {exec} = require("child_process");
const fs_extra = require("fs-extra");
const fs = require("fs");
const path = require("path");

/**
 * -----------------
 * @name getAllFiles
 * @description Get all files recursively
 * @param dir
 * @param files
 * @returns {File[]}
 */
function getAllFiles(dir, files) {

    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, files);
        } else {
            files.push(fullPath);
        }
    });

    return files;
}


/**
 * ----------------------
 * @name concatenateFiles
 * @description Concatenate CSS files
 * @param directory
 * @param output
 */

function concatenateFiles(directory, output) {
    const allFiles = getAllFiles(directory, []);
    const cssFiles = allFiles.filter(file => path.extname(file) === ".css");

    // Ensure output file is empty before writing
    fs.writeFileSync(output, "");

    // Concatenate each file content
    cssFiles.forEach(file => {
        const content = fs.readFileSync(file, "utf8");
        fs.appendFileSync(output, content + "\n");
    });
}


/**
 * --------------
 * @name moveFile
 * @param type
 */

function moveFile(type) {
    const componentsSourceFile = path.join(__dirname, `build/${type}.js`);
    const componentsDestinationFile = path.join(__dirname, `dist/${type}.js`)

    // Move the file
    fs_extra.move(componentsSourceFile, componentsDestinationFile, {overwrite: true}, (err) => {
        if (err) throw err;
    });
}


/**
 * ------------------------
 * Default build parameters
 */

let type = "base" // default type
let directoryPath = path.join(__dirname, "build/base"); // default directory
let outputFilePath = path.join(__dirname, "build/base.css"); // default output file

/**
 * ----------------------------
 * Parse command-line arguments
 */

const args = process.argv.slice(2);

args.forEach(arg => {
    if (arg.startsWith("--base")) {
        type = "base";
        directoryPath = path.join(__dirname, "build/base");
        outputFilePath = path.join(__dirname, "build/base.css");
    }

    if (arg.startsWith("--components")) {
        type = "components";
        directoryPath = path.join(__dirname, "build/components");
        outputFilePath = path.join(__dirname, "build/components.css");
    }

    if (arg.startsWith("--utilities")) {
        type = "utilities";
        directoryPath = path.join(__dirname, "build/utilities");
        outputFilePath = path.join(__dirname, "build/utilities.css");
    }
});

/**
 * ------------------------------------
 * Build base, components and utilities
 */

console.log(`\n:::: Build ${type} ::::`)

exec(`postcss src/${type} src/${type}/*.css --base src --dir build`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }

    // console.log(`Stdout: ${stdout}`);
    console.log(`1. All ${type} CSS files build successfully.`);


    concatenateFiles(directoryPath, outputFilePath);
    console.log(`2. All CSS files have been concatenated into ${outputFilePath}`);

    exec(`npx prejss-cli build/${type}.css --format commonjs`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }

        // console.log(`Stdout: ${stdout}`);
        console.log(`3. Create ${type}.js file.`);

        moveFile(type)
        console.log(`4. Move ${type}.js file to dist directory.`);
    });
});