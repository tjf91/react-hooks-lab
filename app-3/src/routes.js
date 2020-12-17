import { Route, Switch } from "react-router-dom";
import App from "./App";
import List from "./List";
import SingleGif from './SingleGif'

export default (
    <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/gif/:title' component={SingleGif} />
    </Switch>
)