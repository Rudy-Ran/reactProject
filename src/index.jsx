import React from "react";
import ReactDOM from "react-dom";
import BasicLayouts from "./layouts/layout.jsx";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import router from "./assets/js/router.js";
import "./css/index.css";
import "./css/icons.css";
import store from "./store.js";
import "./mock/mock.js";
import { Provider } from "react-redux";
import Login from './pages/login/Login.jsx';
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        // var html = require('./index.html')
        // console.log(html)
        let LayoutRouter = (
            <Switch>
                <Route component={Login} path="/login" />
                <BasicLayouts>            
                    {router.map(({ path, component, exact = true }, key) => {
                        return (
                            <Route
                                exact={exact}
                                key={key}
                                path={path}
                                component = {component}
                            />
                        );
                    })} 
                </BasicLayouts>
            </Switch>
        );
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" render={props => LayoutRouter} />
                </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
