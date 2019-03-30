'use strict'
const { validateAll } = use('Validator');
const Todo = use('App/Models/Todo');

class TodoController {
    // async index ({ view }) {
    //     const todos = await TodoController.call();
    // }
    async store ({ request, response, session }) {
        const body = request.all();
        const rules = {
            text: 'required|min:8'
        }
        const messages = {
            'text.required': 'Todo list cannot be empty',
            'text.min': 'Todo must be at least 5 characters long'
        }
        const validator = await validateAll(body, rules, messages);
        if (validator.fails()){
        session.withErrors(validator.messages()).flashAll();
        return response.redirect('/');
            
        }
        const todo = await Todo.create({
            text: body.text
        })
        // console.log(todo)
        return response.redirect('/');
    }
}

module.exports = TodoController
