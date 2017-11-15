var mongoose = require('mongoose')
var connectionString = "mongodb://master:master@ds028540.mlab.com:28540/burger-shack-kp"
var connection = mongoose.connection




mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to Burger Shack DataBase')
})