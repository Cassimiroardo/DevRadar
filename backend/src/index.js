const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

mongoose.connect('mongodb+srv://eduardo:<password>@cluster0-kui1v.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



const port = 3333
const app = express()

const server = http.Server(app)
app.use(cors())
app.use(express.json())
app.use(routes)

setupWebsocket(server)

server.listen(port, _ => {
    console.log(`server running on port: ${port}`)
})