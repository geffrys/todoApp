const router = require('express').Router()
const { default: work } = require('../models/work')
const { getTodo, getTodos, postTodo, modifyTodo, resetConcatenator, deleteTodo } = require('../controllers/todo');

router.get('/', (req,res)=>{
    console.log('hello estoy en el router.get');
    let respuesta = getTodos()
    // console.log(respuesta);
    res.send({
        encabezado: 'buenos diaks',
        todos: respuesta
    })
    resetConcatenator()
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const todo = getTodo(id)
    console.log(todo);
    if(!todo){
        res.status(404).send({ error: 'Not found',
    type: '404'})
    }
    else{
        res.status(200).send({
            "todo": todo
        })
    }
    resetConcatenator()
})


router.post('/', (req, res) => {
    console.log(req.body);
    const todo_name = req.body.todo_name
    const todo_description = req.body.todo_description
    const todo_status = req.body.todo_status
    console.log(todo_name, todo_description, todo_status);
    postTodo(null, todo_name, todo_description, todo_status)
})


router.put('/:id', (req, res) => {

})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    deleteTodo(id)
})

module.exports = router