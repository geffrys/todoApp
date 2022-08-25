const doc = document.querySelector('#cuerpo')
const API = 'http://127.0.0.1:3000/api/todo' 


// Traemos los datos de la api
let counter = 0
fetch(API)
    .then(valores=>valores.json())
    .then(data=>data)
    .then(datos=>
        {
            console.log(datos)
            counter = 1;
            datos.todos.forEach(element => {
                let divTarea = document.createElement('div')
                const nombre = document.createElement('h2')
                nombre.innerHTML=`${counter}. ${element.todo_name}`
                const descripcion = document.createElement('p')
                descripcion.innerHTML = `${element.todo_description}`
                const completada = document.createElement('p')
                completada.innerHTML = `${element.todo_state ? 'completada': 'no completada'}`
                divTarea.appendChild(nombre)
                divTarea.appendChild(descripcion).appendChild(completada)
                divTarea.setAttribute('id',`${element.id}`)
                doc.append(divTarea)
                counter++
            });
        })
    .catch(err=>console.log('hay un error'+err))

//enviaremos datos a la api

registrar = (event, data)=>{
    // event.preventDefault()
    const name = document.querySelector('#todo_name')
    console.log(name.textContent)
} 

