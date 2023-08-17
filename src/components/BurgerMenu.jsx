import React from "react";

const BurgerMenu = ({ children, isMenuOpen }) => {
    return (
        <div className={"burger-content " + (isMenuOpen ? "active" : "")}>
            {children}
        </div>
    );
};

export default BurgerMenu;
