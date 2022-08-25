const mysql = require('mysql')

// const connect =  mysql.createConnection({
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// })

const connect = mysql.createConnection({
    user: '',
    password: '',
    database: '',
    host: 'localhost',
    port: ''
})

const testConnection = () => {
    connect.connect((err) => {
        if (err) {
            console.log('hubo un error conectandose a la base de datos');
        }
        else {
            console.log('conexion correcta a la base de datos');
        }
    })
}



module.exports = { connect, testConnection }
