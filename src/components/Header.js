import PropTypes from "prop-types" // allows for definition of propTypes on line 21
import Button from "./Button" // imports component

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAdd ? "Hide form" : "Show form"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: "placeholder title",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
