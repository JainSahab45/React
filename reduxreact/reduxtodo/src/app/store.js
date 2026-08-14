import {configureStore} from '@reduxjs/toolkit'
import todoreducer from "../features/todo/todo.slice"
export const store = configureStore({
    reducer : todoreducer
})