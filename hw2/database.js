const fs = require('fs')

const save = function(content, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(content))
}
const load = function(fileName) {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'))
}
module.exports = { save,load }
