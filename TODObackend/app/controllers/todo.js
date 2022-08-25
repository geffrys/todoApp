const { connect } = require("../models/todo")


let todos = [];
const getTodos = () => {
    connect.query(`SELECT * FROM todo`, (err, res, fields) => {
        // console.log(fields)
        // console.log(res)
        res.forEach(element => {
            todos.push({
                "id": element.id,
                "todo_name": element.todo_name,
                "todo_description": element.todo_description,
                "todo_state": element.todo_state === 1 ? true: false
            }
            )
        });
        console.log(todos);
    })
    return todos
}
const resetConcatenator = () => {
    todos = []
    todo= []
}

let todo = []
const getTodo = (id) => {
    connect.query(`SELECT * FROM todo WHERE id=${id}`, (err, res, fields)=>{
        todo = res
    })
    return todo
}


const postTodo = (id, name, description, state) => {
    console.log('hola entre a realizar la consulta', id, name, description, state);

    connect.query(`INSERT INTO todo(id, todo_name, todo_description, todo_state) VALUES ('${id}','${name}','${description}','${state}')`, (err, res, fields) => {
        if (err) {
            console.log(err)
            throw err
        }
        else {
            console.log(res);
        }

    })
}

const modifyTodo = (work) => {
    connect.query(`UPDATE todo SET todo_name=${work.name}, todo_description=${work.description}, todo_status=${work.state} WHERE id=${work.id}`)
}

const deleteTodo = (id) => {
    connect.query(`DELETE FROM todo WHERE id='${id}'`, (err, res, fields)=>{
        if(err) throw err
        console.log(res);
    })
}

module.exports = { getTodo, getTodos, postTodo, modifyTodo, deleteTodo, resetConcatenator }