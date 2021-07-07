import React from 'react';
import {Route} from "react-router";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import MovieScreen from "../Screen/MovieScreen/MovieScreen";

function MoviesRouter(props) {
    return [
            <Route key={1} path={"/"} exact={true} component={HomeScreen}/>,
            <Route
                path={"/movie/:id/:name"}
                exact={true}
                component={MovieScreen} />
    ];
}

export default MoviesRouter;