// Import the child_process module to execute shell commands
const { exec } = require("child_process");

// Function to run a command and handle its output
function runCommand(command) {
    
    return new Promise((resolve, reject) => {
        
        const process = exec(command, (error, stdout, stderr) => {
            
            if (error) {
                console.error(`Error executing command: ${command}`);
                console.error(error.message);
                return reject(error);
            }

            if (stderr) {
                console.warn(`Warnings for command: ${command}`);
                console.warn(stderr);
            }

            // console.log(`Output for command: ${command}`);
            // console.log(stdout);
            resolve(stdout);

        });

        // Forward output in real-time (optional)
        process.stdout.pipe(process.stdout);
        process.stderr.pipe(process.stderr);
    });
}

(async function main() {

    try {

        /**
         * :::: build base styles ::::
         */
        console.log("Running compress all base styles...");
        await runCommand("npm run build:scss:base");

        console.log("Running parse base styles...");
        await runCommand("npm run build:pcss:base");

        /**
         * :::: build components style ::::
         */
        console.log("Running compress all components style...");
        await runCommand("npm run build:scss:components");

        console.log("Running parse components style...");
        await runCommand("npm run build:pcss:components");

        /**
         * :::: build utilities style ::::
         */
        console.log("Running compress all utilities styles...");
        await runCommand("npm run build:scss:utilities");

        console.log("Running parse utilities style...");
        await runCommand("npm run build:pcss:utilities");

        
        /**
         * :::: build persian-ui ::::
         */
        console.log("Running npm build...");
        await runCommand("npx prejss-cli dist/*.css --format commonjs");

        console.log("All commands executed successfully!");

    } catch (error) {

        console.error("An error occurred while running commands.");
        process.exit(1);

    }
    
})();
