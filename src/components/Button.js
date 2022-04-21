import PropTypes from "prop-types"

export const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Add",
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired, 
}

export default Button
