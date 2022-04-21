import PropTypes from "prop-types" // allows for definition of propTypes on line 21
import Button from "./Button" // imports component

const Header = ({ title }) => {
    return (
        <header className="header">
            <h2>{title}</h2>
            <Button text="Click to add" onClick={clickPrinter} />
        </header>
    )
}

const clickPrinter = () => {
    // get passed to Button component as a prop on line 8
    console.log("click!")
}

Header.defaultProps = {
    title: "placeholder title",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
