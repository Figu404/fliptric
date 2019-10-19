import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageHome from "../PageHome";
import PageProduct from "../PageProduct";
import PageShoppingCart from "../PageShoppingCart";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={PageHome}/>
                <Route exact path="/product" component={PageProduct}/>
                <Route exact path="/shoppingcart" component={PageShoppingCart}/>
            </Router>
        </div>
    )
}

export default App;