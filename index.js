const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))


var obj={}

obj.name="Being Zero";
obj.college="cmrcet";
obj.regno="17H51A05B9";

app.get('/data',(req,res) => res.json(obj))

app.get('/', (req, res) => res.sendFile(__dirname+"/public/html/index.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))