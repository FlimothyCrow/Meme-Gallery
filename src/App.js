import "./App.css"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"

const memesText = "memes"

// create button that hides or reveals drum img

// create input form that saves "username" to state date
// click event triggers usernameVerifier()
// if it passes, set input to state data
// if not, error state, try again

function App() {
    const [arrayOfTasks, setTasks] = useState([
        {
            id: 1,
            text: "buy bread",
            day: "05/01/2022",
            reminder: true,
        },
        {
            id: 2,
            text: "eat bread",
            day: "05/01/2022",
            reminder: true,
        },
        {
            id: 3,
            text: "add buy bread task",
            day: "05/01/2022",
            reminder: true,
        },
    ])

    return (
        <div className="container">
            <Header title="things" />
            <h2>print out {memesText}</h2>
            <h2>is memes true? {memesText ? "yes" : "no"}</h2>
            <Tasks arrayOfTasks={arrayOfTasks} />
        </div>
    )
}

Header.defaultProps = {
    title: "placeholder title",
}

export default App
