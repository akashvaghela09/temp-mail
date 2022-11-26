const express = require('express');
const app = express();
const PORT = 3000;
const { style } = require("./style");


app.get('/', (req, res) => {
  res.send(`<div style="${style}">It's a Sample Node App</div>`)
})

app.get('/app', (req, res) => {
    res.send(`GET Request`)
})

app.post('/app', (req, res) => {
    res.send(`POST Request`)
})

app.patch('/app', (req, res) => {
    res.send(`PATCH Request`)
})

app.put('/app', (req, res) => {
    res.send(`PUT Request`)
})

app.delete('/app', (req, res) => {
    res.send(`DELETE Request`)
})




const testing = () => {
    console.log("working.....");
}

testing()





app.listen(process.env.PORT || PORT, () => {
    console.log(`Node running at ${PORT}`)
})