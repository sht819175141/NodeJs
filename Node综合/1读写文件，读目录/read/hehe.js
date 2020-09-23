const fs = require("fs")
var cs = JSON.parse(fs.readFileSync("./mime.json"))
for (i in cs) {
    console.log(cs[i])
}
