import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import BodegaOneMenu from "./component/BodegaOneMenu";
import { Switch, Route } from 'react-router-dom';

// reactDom.render(<Router><App /></Router>, document.getElementById('root'));

<BrowserRouter>
    <Switch>
        <Route path='/bodegareact' component={BodegaOneMenu}/>
    </Switch>
</BrowserRouter>

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<App />);

// reactDom.render(<App />, document.getElementById("root"));