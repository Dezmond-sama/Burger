import { useState } from "react";

const BurgerButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => setMenuOpen((prev) => !prev);
    return (
        <div
            className={"burger-button " + (menuOpen ? "active" : "")}
            onClick={toggle}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default BurgerButton;
