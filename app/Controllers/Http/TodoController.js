'use strict'
const Todo = use('App/Models/Todo');

class TodoController {
    // async index ({ view }) {
    //     const todos = await TodoController.call();
    // }
    async store ({ request, response }) {
        const body = request.all();
        // console.log(request.all())
        await Todo.create({
            text: body.text
        })
        // console.log(todo)
        return response.redirect('/');
    }
}

module.exports = TodoController
