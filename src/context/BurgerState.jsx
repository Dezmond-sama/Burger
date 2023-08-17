import { createContext, useState } from "react";

export const BurgerContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});
const BurgerState = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <BurgerContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </BurgerContext.Provider>
    );
};

export default BurgerState;
