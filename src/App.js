import logo from "./logo.svg"
import drums from "./img/drums.jpg"
import "./App.css"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={drums} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=aOHi8dJdUbI"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click for spicy drums
                </a>
            </header>
        </div>
    )
}

export default App
