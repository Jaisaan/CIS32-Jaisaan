const jsonData = require('./main.JSON');
console.log(jsonData)

fetch('./main.JSON')
    .then(response => {
        return response.json();
    })
    .then(jsondata => console.log(jsondata));