import "./App.css";
import "./burger.scss";
import BurgerState from "./context/BurgerState";
import MainMenu from "./components/MainMenu";

function App() {
    return (
        <div>
            <BurgerState>
                <MainMenu />
            </BurgerState>
        </div>
    );
}

export default App;
