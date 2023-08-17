import React, { useContext } from "react";
import { BurgerContext } from "../context/BurgerState";

const BurgerMenu = ({ children }) => {
    const { isMenuOpen } = useContext(BurgerContext);

    return (
        <div className={"burger-content " + (isMenuOpen ? "active" : "")}>
            {children}
        </div>
    );
};

export default BurgerMenu;
