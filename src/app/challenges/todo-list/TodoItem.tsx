import { Fragment } from "react"


const arr = ['hello', 'world']
export default function TodoItem() {

    return (

        <Fragment>
            
            {arr.map((todoItem, todoIndex) => (
                <li key={todoIndex}>{todoItem}</li>
            ))}
        </Fragment>
    )
}