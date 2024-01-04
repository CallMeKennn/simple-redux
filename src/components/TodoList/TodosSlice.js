const initialState = {
    todoList: [
        {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
        {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
    ]
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'todos/todoAdded':
            return [...state.todoList, action.payload]
    }
}

export default todoListReducer