import { createContext, useContext } from "react";

export const todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addtodo : (todo) => {},
    updatetodo : (id,todo) => {},
    deletetodo : (id) => {},
    togglecomplete : (id) => {}
})

export const usetodo = () => {
    return useContext(todocontext)
}

export const todoprovider = todocontext.Provider
export const TodoProvider = todoprovider