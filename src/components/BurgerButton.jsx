import { useContext } from "react";
import { BurgerContext } from "../context/BurgerState";

const BurgerButton = () => {
    const { isMenuOpen, toggleMenu } = useContext(BurgerContext);
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
