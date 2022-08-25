const express = require('express')
const app = express()
const { testConnection } = require('./app/models/todo')
const PORT = 3000
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


// para el uso global de cors, en caso de que se quiera usar como middleware, se debe poner en los metodos de app.get o post o el que se vaya a usar
app.use(cors())
// solo para que me retroalimente mas
testConnection()
//rutas
const todo = require('./app/router/todo')
app.use('/api/todo', todo)

app.get('/api/',(req, res)=>{
    console.log('api');
    res.send('bienvenido a la ruta api')
})

// app.get('/*', (req,res)=>{
//     res.status(404).send({
//         error: 'not found'
//     })
// })

app.listen(PORT, ()=>{
    console.log('conexion correcta para servidor realizada '+ PORT);
})