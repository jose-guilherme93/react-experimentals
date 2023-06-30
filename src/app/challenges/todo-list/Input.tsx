import { useState } from "react"


export default function Input() {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState<string[]>([])

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
       
    }
    return (
        <form>
            <label htmlFor="input">

                <input id="input" placeholder="o que pensa em fazer?" className="input" value={inputValue} onChange={handleInputValue} type="text" />
            </label>
        {todos}
        </form>
    )
}