import { useState } from "react"


function Interview(){
    const [task, setTask] = useState([])

    const register = (item) => {
        console.log(item)
    }

    const onChange = (e) => {
        setTask((prevState) => ({
            ...prevState, 
            [e.target.name] : e.target.value,
        }))}
    return <>
    <div>
        <h1>To Do List</h1>
        <form onSubmit = {register}>
        <input type="text" value={task} onChange={onChange}></input>
        <input type="submit"></input>
        </form>

    </div>
    </>
}

export default Interview