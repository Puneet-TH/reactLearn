import { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: () => {},
    completeTodo: (id) => {},
})

export const useTodo = () =>{
    //hmesha use context to kuch pass karna pdega
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider