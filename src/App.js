import { useRef, useState } from "react";
import "./App.css";
import "./burger.scss";
import BurgerButton from "./components/BurgerButton";
import BurgerMenu from "./components/BurgerMenu";
import useOnClickOutside from "./hooks/useOnClickOutside";

function App() {
    const ref = useRef();
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => setMenuActive((prev) => !prev);
    useOnClickOutside(ref, () => {
        if (menuActive) {
            toggleMenu();
        }
    });
    return (
        <div ref={ref}>
            <div className="navbar">
                <BurgerButton isMenuOpen={menuActive} toggleMenu={toggleMenu} />
            </div>
            <BurgerMenu isMenuOpen={menuActive}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                temporibus mollitia, asperiores ea facere esse pariatur alias
                necessitatibus, recusandae quidem dolore. Explicabo consequatur
                itaque molestiae, deserunt architecto iusto adipisci id?
            </BurgerMenu>
        </div>
    );
}

export default App;
