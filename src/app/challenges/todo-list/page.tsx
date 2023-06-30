"use client"

import { Todo } from "."


export default function TodoApp() {
  

    return(
            <Todo.Root>
                <Todo.Input/>
                <Todo.AddButton/>
                <Todo.DeleteButton/>
                <Todo.TodoItem/>
            </Todo.Root>
    )
}