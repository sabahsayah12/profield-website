const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('./docs/PROFIELD - PORTFOLIO .pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
