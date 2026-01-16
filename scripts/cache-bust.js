const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const version =
    process.argv[2] || new Date().toISOString().replace(/[-:.TZ]/g, "");

const htmlFiles = ["index.html", "library.html", "calculator.html", "palace.html", "analytics.html"];

const replaceVersion = (content) =>
    content
        .replace(/(\.(?:css|js))\?v=[^"']+/g, `$1?v=${version}`)
        .replace(/__CACHE_BUST__/g, version);

htmlFiles.forEach((file) => {
    const filePath = path.join(docsDir, file);
    if (!fs.existsSync(filePath)) return;
    const original = fs.readFileSync(filePath, "utf8");
    const updated = replaceVersion(original);
    if (updated !== original) {
        fs.writeFileSync(filePath, updated, "utf8");
    }
});

console.log(`Cache-bust version set to ${version}`);
