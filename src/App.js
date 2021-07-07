import {MainContainer} from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import MoviesRouter from "./Router/MovieRouter";
import {Switch} from "react-router";

function App() {
    return (
        <MainContainer>
            <Nav/>
            <Switch>
                {MoviesRouter()}
            </Switch>
        </MainContainer>
    );
}

export default App;
