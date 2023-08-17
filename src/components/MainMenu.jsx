import { useContext, useRef } from "react";

import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import { BurgerContext } from "../context/BurgerState";
import useOnClickOutside from "../hooks/useOnClickOutside";

const MainMenu = () => {
    const ref = useRef();
    const { isMenuActive, toggleMenu } = useContext(BurgerContext);
    useOnClickOutside(ref, () => {
        if (isMenuActive) {
            toggleMenu();
        }
    });

    return (
        <div ref={ref}>
            <div className="navbar">
                <BurgerButton />
            </div>
            <BurgerMenu>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                temporibus mollitia, asperiores ea facere esse pariatur alias
                necessitatibus, recusandae quidem dolore. Explicabo consequatur
                itaque molestiae, deserunt architecto iusto adipisci id?
            </BurgerMenu>
        </div>
    );
};

export default MainMenu;
