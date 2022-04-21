import "./App.css"

const memesText = "memes"

// create button that hides or reveals drum img

// create input form that saves "username" to state date
// click event triggers usernameVerifier()
// if it passes, set input to state data
// if not, error state, try again

function App() {
    return (
        <div className="container">
            <h1>Reactivity test</h1>
            <h2>print out {memesText}</h2>
            <h2>is memes true? {memesText ? "yes" : "no"}</h2>
        </div>
    )
}

export default App
