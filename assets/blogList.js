const fs = require('fs');
const files = fs.readdirSync('articles/');

export default files;