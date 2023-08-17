const BurgerButton = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div
            className={"burger-button " + (isMenuOpen ? "active" : "")}
            onClick={toggleMenu}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default BurgerButton;
